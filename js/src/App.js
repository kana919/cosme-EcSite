export class App{
    constructor() {
        // 初期表示画像を設定
        document.getElementById('slider-img-bathtime').style.display = "none";
        document.getElementById('slider-img-skincare').style.display = "none";
        
    }

    mount(){
        try{

            // スクロール時にメニューバーのみ表示する処理
            window.addEventListener("scroll",()=>{
                if( 66 < window.scrollY )
                {
                    document.getElementById('header').style.display = "none";
                }
                else
                {
                    document.getElementById('header').style.display = "block";
                }     
            });
            // 表示イメージ用カウンタ
            let imgCount = 1;
            setInterval(()=>{
                
                if( imgCount == 1 )
                {
                    document.getElementById('slider-img-makeup').style.display = "block";
                    document.getElementById('slider-img-bathtime').style.display = "none";
                    document.getElementById('slider-img-skincare').style.display = "none";
                    imgCount = 2;
                }
                else if( imgCount == 2 )
                {
                    document.getElementById('slider-img-makeup').style.display = "none";
                    document.getElementById('slider-img-bathtime').style.display = "block";
                    document.getElementById('slider-img-skincare').style.display = "none";
                    imgCount = 3;
                }
                else if( imgCount == 3 )
                {
                    document.getElementById('slider-img-makeup').style.display = "none";
                    document.getElementById('slider-img-bathtime').style.display = "none";
                    document.getElementById('slider-img-skincare').style.display = "block";
                    imgCount = 1;
                }
            },5000);

 
        

            
            

        }
        catch (error) {
        console.error(`${error}`);
      }
    }

}