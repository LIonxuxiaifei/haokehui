 //滚动加图片
        var ImgLazy = function () {
            	console.log(555)
        	
            var $winH = $(window).height(); //获取窗口高度
            var $img = $("img[lazy='y']");  //获取页面上要延时加载的图片集合
            var $imgH = parseInt($img.height() / 4); //图片到四分之一的时候显示
            var $srcDef = "http://pic.qtour.com/m/Content/img/img_loading_400_300.jpg";
            var runing = function () {
                $img = $("img[original]");
                $img.each(function (i) {//遍历img
                    var $src = $(this).attr("original"); //获取当前img URL地址
                    if ($src && $src.length >= 0 && $src.indexOf("{") < 0) {
                        var $scroTop = $(this).offset(); //获取图片位置
                        if ($scroTop.top + $imgH >= $(window).scrollTop() && $(window).scrollTop() + $winH >= $scroTop.top + $imgH) {//判断窗口至上往下的位置
                            if ($(this).attr("src") == $srcDef) {
                                $(this).hide();
                            }
                            $(this).attr("src", function () { return $src }).fadeIn(300); //元素属性交换
                            $(this).removeAttr("original");
                        }
                    }
                });
            }
            runing(); //页面刚载入时判断要显示的图片
            $(window).scroll(function () {
                runing(); //滚动刷新
            })
        };
