//폐기됨

const ciso = { //플레이어블 객체 정의
    id : "",
    position_X : 0,
    position_Y : 0,
    speed : 1,
    isMe : true,
    upKey : false,
    downKey : false,
    leftKey : false,
    rightKey : false,
    keyDownEvent(e){
        if(e.key === 'ArrowUp'){
            this.upKey = true;
        }
        if(e.key === 'ArrowDown'){
            this.downKey = true;
        }
        if(e.key === 'ArrowLeft'){
            this.leftKey = true;
        }
        if(e.key === 'ArrowRight'){
            this.rightKey = true;
        }
    },
    keyUpEvent(e){
        if(e.key === 'ArrowUp'){
            this.upKey = false;
        }
        if(e.key === 'ArrowDown'){
            this.downKey = false;
        }
        if(e.key === 'ArrowLeft'){
            this.leftKey = false;
        }
        if(e.key === 'ArrowRight'){
            this.rightKey = false;
        }
    }
};


module.getCiso = () => {

    return {
        id : "",
        position_X : 0,
        position_Y : 0,
        speed : 1,
        isMe : true,
        upKey : false,
        downKey : false,
        leftKey : false,
        rightKey : false,
        keyDownEvent(e){
            if(e.key === 'ArrowUp'){
                this.upKey = true;
            }
            if(e.key === 'ArrowDown'){
                this.downKey = true;
            }
            if(e.key === 'ArrowLeft'){
                this.leftKey = true;
            }
            if(e.key === 'ArrowRight'){
                this.rightKey = true;
            }
        },
        keyUpEvent(e){
            if(e.key === 'ArrowUp'){
                this.upKey = false;
            }
            if(e.key === 'ArrowDown'){
                this.downKey = false;
            }
            if(e.key === 'ArrowLeft'){
                this.leftKey = false;
            }
            if(e.key === 'ArrowRight'){
                this.rightKey = false;
            }
        }
    }

}