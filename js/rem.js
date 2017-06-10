
/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
        changefontSize();
    window.onresize = function(){
        changefontSize();
    }

        //封装
        function changefontSize(){
            var html = document.getElementsByTagName('html')[0];
            /*取到屏幕的宽度*/
            var width = window.innerWidth;
            /* 640 100  320 50 */
            var fontSize = 100/640*width;/*(注意:此处的640随着设计图的尺寸做相应的修改,320或750)*/
            /*设置fontsize*/
            html.style.fontSize = fontSize +'px';
        }


