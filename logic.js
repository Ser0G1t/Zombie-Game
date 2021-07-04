class Game{
    create_monster(setTime){
        this.new_monster=document.createElement('div')
        this.new_monster.classList.add('monster')
        game_window.appendChild(this.new_monster)
        this.monster_move(setTime)
        this.monster_click()
    }

   monster_click(){
        let monsters=document.querySelectorAll('.monster')
        monsters.forEach( el => {
            el.addEventListener('click', function(){
                game_window.removeChild(el)
                this.score()
            }.bind(this));
        });
    }
        
    async monster_move(time){
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
        for(let i=0;i<104;i++) {
        await sleep(time)
        this.new_monster.style.right=`${i}%`
        }
        
        this.health()
    }

    score(){
        points+=10
        score_window.innerText=points;
    }

    health(){
        if (this.new_monster.getBoundingClientRect().right<0){
            game_window.removeChild(this.new_monster)
            let hp=document.querySelector('.hp')
            hp_box.removeChild(hp)
            hp_points-=1;
            if(hp_points===0){
                alert("You lose!")
                let monsters=document.querySelectorAll('.monster')
                clearInterval(main_interval)
                monsters.forEach(el=>{
                     el.classList.add('disappear')
                })
            }
        }
    }

    async rambo(){
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
        for(let i=0;i<104;i++) {
        await sleep(40)
        this.new_monster.style.right=`${i}%`
        }
        this.health()
    }


}

const game_window=document.querySelector('.game-container')
const score_window=document.querySelector('.score')
const hp_box=document.querySelector('.health')



let points=0;
let hp_points=3;
let counter=0

main_interval= setInterval(() => {
    setInterval(()=>{
        counter++
        if (counter>3) counter=0
    },1000)

    if(counter>2){
        letsPlay=new Game()
        letsPlay.create_monster(70)
        
    }else{
        letsPlay=new Game()
        letsPlay.create_monster(100)
        counter=0
    }
    
    },1000) 
