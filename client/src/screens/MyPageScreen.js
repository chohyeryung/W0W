import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import cateData from "../data/cate_data.json";
import styles from "../styles/MyPageStyles";

export class MyPageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { cates: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/mypage/cate')
            .then(response => {
                this.setState({cates: response.data});
            })
    }

    _fetchCate = (cate) => {
        axios.post('http://localhost:5000/mypage/pointing', {ca : cate})
        .then(response => {
            axios.get('http://localhost:5000/mypage/cate')
            .then(response => {
                this.setState({cates: response.data});
            })
        });
    }


    render(){
        const { cates } = this.state;

        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <Ionicons 
                            name="chevron-back-sharp" size={50} style={styles.backIcon}
                            onPress={() => props.navigation.navigate('SignIn')}/>
                    </TouchableOpacity>
                    <Text style={styles.topTitle}>MY ZERO</Text>
                </View>
    
                <View style={styles.cateContainer}>
                    {cates.map((cate, index) => {
                        return (
                            <TouchableOpacity
                                key={cate.category}
                                onPress={(e) => {this._fetchCate(cate.category)}}>
                                <View style={styles.cateCon} onClick={this.handleClick}>
                                    <Text style={styles.text_count}>{cate.cnt}</Text>
                                    <Text style={styles.text_title}>{cate.category}</Text>
                                </View> 
                            </TouchableOpacity>
                        ) 
                    })}
                </View>
               
            </View>
        )
    }

    
}

export default MyPageScreen;