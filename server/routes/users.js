const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        area: req.user.area,
        role: req.user.role,
    });
});

router.post("/register", (req, res) => {

    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            return res.json({
                loginSuccess: false,
                message: "이미 존재하는 아이디입니다."
            })
        } else {
            const user = new User(req.body);
            user.save((err, doc) => {
                if (err) return res.json({ registerSuccess: false, err });
                return res.status(200).json({
                    registerSuccess: true
                });
            });
        }
            
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "해당 아이디가 존재하지 않습니다."
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "비밀번호가 일치하지 않습니다." ,token : user.token,  userId: user._id});

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
                
            });
            // AsyncStorage.setItem(
            //     'userData',
            //     JSON.stringify({
            //       token: user.tokenExp,
            //       userId: user._id
            //     })
            //   );
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user_id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
    // AsyncStorage.removeItem('userData')
});

router.post("/forgot_password", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                sendSuccess: false,
                message: "해당 아이디가 존재하지 않습니다."
            });
        } else {
            return res.status(200).send({
                sendSuccess: true
            })
        }
    })
})

router.post("/change_password", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                changeSuccess: false
            });
        } else {
            User.findOneAndUpdate({ email: req.body.email }, { password: req.body.password }, (err, doc) => {
                if (err) return res.json({ changeSuccess: false, err });
                return res.status(200).send({
                    changeSuccess: true
                });
            })
        }
    })
})

module.exports = router;