import React from 'react';
import ItemLists from '../ItemLists'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

type ItemCardsProps = {
    data: any
    onBottomScrolled: () => void
}
const ItemCards = ({onBottomScrolled, data}: ItemCardsProps) => {

    const scrollRef = useBottomScrollListener(() => onBottomScrolled());
    const handleCheckedListCount = (value: []) => {
        console.log("am here checked list coiunt", value);
    } 
    return (
        
        <div style={{width: 500, height: 500, marginTop: 50,border: '1px solid gray'}}>
            <div style={{borderBottom: '1px solid gray', paddingTop: 20, paddingBottom: 20, paddingLeft: 20, fontWeight: 'bold', fontSize: 25}}>Books</div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',borderBottom: '1px solid gray', height: 35}}>
                <div style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 20, fontWeight: 'bold', fontSize: 16}}>{data ? data?.length : 0} Books (0 Selected)</div>
                <button style={{fontWeight: 12, height: 20, marginRight: 20}}>Clear Selection</button>
            </div>
        <div style={{width: 500, height: 392, overflow: 'auto' }} 
        ref={scrollRef as React.RefObject<HTMLDivElement>}
        >
            <ItemLists data={data} checkedLists={(value: []) => handleCheckedListCount(value)}/>
        </div>
        </div>
        
    )
};

export default ItemCards