import { Menu } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import React from 'react'


export default function Category(props) {
    const {category,waterLevel,levels} = props;
    return (
        <div>
            <Menu.ItemGroup key ="inddorOutdoor" title="Indoor | Outdoor">
                <Menu.Item key={category.id}>
                    <span>{category.name}</span>
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key ="waterType" title="Water require">
                <Menu.Item key={waterLevel.id}>
                    <span>{waterLevel.name}</span>
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key ="" title="lv">
                <MenuItem key={levels.id}>
                    <span>{levels.name}</span>

                </MenuItem>
            </Menu.ItemGroup>
            
        </div>
    )
}
