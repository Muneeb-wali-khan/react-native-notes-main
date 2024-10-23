import React from 'react';
import { View } from 'react-native';
import Dropdown from 'react-native-muneeb-wali-khan-smooth-drop-down';

const CustomDropDown = () => {
  const items = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const handleSelect = (item) => {
    console.log('Selected Item:', item);
  };

  return (
    <View style={{ padding: 20 }}>
      <Dropdown
        items={items}
        onSelect={handleSelect}
        placeholder="Choose an option"
        containerStyle={{ backgroundColor: '#f8f8f8', borderRadius: 10 }}
        dropdownStyle={{ borderColor: '#007bff' }}
        placeholderStyle={{ fontSize: 16, color: '#333' }}
        itemStyle={{ backgroundColor: '#f0f0f0', borderBottomWidth: 1, borderColor: '#ddd' }}
        itemTextStyle={{ fontSize: 14, color: '#007bff' }}
      />
    </View>
  );
};


export default CustomDropDown;