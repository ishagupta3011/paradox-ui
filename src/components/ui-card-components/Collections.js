import '../../styles/collections-styles.scss';


export default function Collections(props){
    const {title,data}=props;
    

    return <div className='collections-wrapper'>
				<div className='collections-heading'>
					<div className='collections-title'>
                        {title}
					</div>
					<div className='elippsis'>...</div>
				</div>
                <div className="collections-table">
                    <div className="table-header">
                    <div>Collection</div>
                    <div>Items</div>
                    <div>Active collaterals</div>
                    </div>
                    <div className="table-data">
                        {data.length>0 &&
                        data.map((collection)=>{
                            return  <div className="table-row">
                            <div className="collection-details"><div className="icon">
                                 <img src={collection.collectionUrl}></img>
                                 </div>
                                 <div className="name">{collection.collectionName}</div>
                                 </div>
                            <div className="items">{collection.items}</div>
                            <div className="active-collaterals">{collection.activeCollaterals}</div>
                        </div>
                        })
                   
}
                    </div>
                </div>
			</div>
}