
/*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
        changefontSize();
    window.onresize = function(){
        changefontSize();
    }

        //��װ
        function changefontSize(){
            var html = document.getElementsByTagName('html')[0];
            /*ȡ����Ļ�Ŀ��*/
            var width = window.innerWidth;
            /* 640 100  320 50 */
            var fontSize = 100/640*width;/*(ע��:�˴���640�������ͼ�ĳߴ�����Ӧ���޸�,320��750)*/
            /*����fontsize*/
            html.style.fontSize = fontSize +'px';
        }


