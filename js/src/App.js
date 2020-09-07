export class App{
    constructor() {
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

            
            

        }
        catch (error) {
        console.error(`${error}`);
      }
    }
}