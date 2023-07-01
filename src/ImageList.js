import './ImageList.scss'

const ImageList = ({images, updateMainBG}) =>{
    console.log("from ImgList",images)


    return <div className='carousel'>
        {
            images && images.map((img, index) =>
                <div key={index}
                     onClick={()=>updateMainBG(img)}
                     style={{background: `url(${img.thumb}) no-repeat center/cover fixed`}}></div>
            )
        }
    </div>
}

export default ImageList