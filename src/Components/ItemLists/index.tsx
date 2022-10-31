import react, {useState} from 'react';
import Checkbox from '../CheckBox';

type dataPropsValues = {
  data: any,
  checkedLists: [] | number | any,
  handleCheckedListCount?: (value: any | [] | number) => void
}

const ItemLists = (props: dataPropsValues) =>  {

    const checkedLists: String[]= [];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(checkedLists.includes(e.target.value)) {
      const index = checkedLists.indexOf(e.target.value);
      if (index > -1) {
      checkedLists.splice(index, 1);
      } 
    } else {
      checkedLists.push(e.target.value)
    }
  };

    return (
        <>
        {props.data.map((items: any, index: number) => {
          return (
          <div key={items.id + index} style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', borderBottom: '1px solid gray',paddingLeft: 20, height: 75}}>
            <Checkbox
            handleChange={handleChange}
            isChecked={checkedLists}
            id={items.id + index}
            onClickHandle={(props: any) => props.handleCheckedListCount(checkedLists)}

            />
            <img src={items?.formats?.["image/jpeg"]}  style={{maxHeight: 45, maxWidth: 45, paddingLeft: 10}}/>
            <div style={{width: '100%', paddingLeft: 20}}><span style={{fontWeight: 'bold'}}>{items?.title}</span><br/> {items?.authors[0]?.name}</div>
          </div>
          )}
        )}
        </>
    )
}

export default ItemLists