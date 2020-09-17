import React from 'react';
import ListingTodoModel from '../../models/todoModel'
import './index.css';
type ListingProps = {
  modelList: Array<ListingTodoModel>,
  onClickStriker?: (model: ListingTodoModel) => void
}

function ListingComponent({ modelList, onClickStriker }: ListingProps) {
  return (
    <div className="listContainer">
      <ul>
        {modelList.map((element,index) => <li key={index} className={element.isStriked ? 'strikeText textStyle' : 'textStyle'} onClick={() => {
          if (onClickStriker) {
            onClickStriker(element)
          }
        }}>{element.listingTitle}</li>)}
      </ul>
    </div>
  )
}

export default ListingComponent;
