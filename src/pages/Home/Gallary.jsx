import React from 'react';

const Gallary = () => {
    const images = [
        {image: "https://ssl.du.ac.bd/fontView/images/slider/16229812595c68187b-e769-4ce0-af61-c787c4c0687e.jpg"},
        {image: "https://dept.jnu.ac.bd/assets/pictures/517.jpg"},
        {image: "https://www.kuet.ac.bd/images/3rd_Convocation_of_kuet_2018_17.JPG"},
        {image: "https://www.kuet.ac.bd/images/3rd_Convocation_of_kuet_2018_20.JPG"},
        {image: "https://tds-images.thedailystar.net/sites/default/files/images/2022/06/19/graduation_photo-02.jpg"},
        {image: "https://www.daily-sun.com/assets/news_images/2023/06/26/SRU_Photo-01.jpg"},
        {image: "https://live.staticflickr.com/3791/33674634386_1a8ebb61f1_b.jpg"},
        {image: "https://dailyasianage.com/library/1599749315_1.png"},
        {image: "https://prod-media-eng.dhakatribune.com/uploads/2021/09/graduates-1631373117857.jpg"},
        {image: "https://dailyasianage.com/library/2018/10/06/1538849533_4.jpg"},
        {image: "https://thedailynewnation.com/library/1668876411_0.jpg"},
        {image: "https://convocation.du.ac.bd/convocation_image/DU-Convocation3.jpg"},
        {image: "https://gumlet.assettype.com/bdnews24-english%2Fimport%2Fmedia%2F2017%2F03%2F04%2F06_convocation-_du_md-pramanik_040317_0013.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=732"},
        {image: "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2022/11/19/convocation1.jpg"},
        {image: "https://bu.edu.bd/buPrev/wp-content/uploads//photo-gallery/Image00034.jpg"},
    ]
    return (
        <div>
            <h2 className='text-primary text-center text-5xl underline mt-20 mb-10 lg:mt-32'><span className='bg-yellow-300'>Gallary of Graduate&apos;s</span></h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
                {
                    images.map((i,index) => <img className='h-40 w-full' src={i.image} alt="Graduate's group photo" key={index} />)
                }

                
            </div>
        </div>
    );
};

export default Gallary;