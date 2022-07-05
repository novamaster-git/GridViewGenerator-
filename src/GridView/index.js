import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
const GridView = () => {
    const [data, setData] = useState([1, 2, 3, 4]);
    const [rowCol, setRowCol] = React.useState(2);
    function increaseData() {
        let temp = [];
        for (let index = 0; index < Math.pow(rowCol + 1, 2); index++) {
            temp.push(index);
        }
        setData(temp);
    }

    function increaseItems() {
        setRowCol(rowCol + 1);
        increaseData();
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
                style={{
                    height: Dimensions.get('window').width,
                    width: Dimensions.get('window').width,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                {data.map(() => {
                    return (
                        <TouchableOpacity
                            onPress={() => increaseItems()}
                            style={{
                                backgroundColor: 'green',
                                height: Dimensions.get('window').width / rowCol,
                                width: Dimensions.get('window').width / rowCol,
                                borderWidth: 1,
                                borderColor: 'white',
                            }}></TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};
export default GridView;
