$(function(){
	$(".content2Detail2").find("li").click(function(event){
		$(this).addClass("colorChange1")
		$(this).find("span").addClass("colorChange2")
		$(this).siblings().removeClass("colorChange1")
		$(this).siblings().children("span").removeClass("colorChange2")
//		event.stopPropagation()
	})
	
})

//			返回顶部
			 $(function () {
		            var _window = $(window);
		            /*页面滚动*/
		            _window.scroll(function () {
		                //滚动鼠标tab高亮
		                setTimeout(function () {
//		                    var th = $(".haha").offset().top;
		                   	var th = 100;
		                    var st = _window.scrollTop();
		                    if (st > th-50) {
		                        $("#returnTop").fadeIn();
//		                        $(".returnTop").removeClass(".hide");
		                    } else {
		                        $("#returnTop").fadeOut();
		                    }
		                }, 100)
		            });
				
				 $("#returnTop").click(function () {
	            $("body,html").animate({ "scrollTop": "0px" }, 100);
	            $(this).fadeOut();
	
	        })
        	})
			 
	//	注册,登录页面		 
		$(function () {
			$("#register-submit").click(function(){
				var reNickname=document.getElementById("reNickname").value
				if(reNickname==""){
					var reNickname=0
				}
				var reAddress=document.getElementById("reAddress").value
				if(reAddress==""){
					var reAddress=0
				}
				var reGender=document.getElementById("reGender").value
				if(reGender==""){
					var reGender=0
				}
				var reBirthday=document.getElementById("reBirthday").value
				if(reBirthday==""){
					var reBirthday="1980-01-01"
				}
				var userId=localStorage.getItem("userId")
				console.log(userId)
				console.log(reNickname)
				console.log(reAddress)
				console.log(reGender)
				console.log(reBirthday)
//				调用第二个注册的接口
						$.ajax({
			   				url:"http://47.100.46.113:8080/app/user/createExpend",
			   				data:{
			   					"userExpend.nickname":reNickname,
			   					"userExpend.gender":reAddress,
			   					"userExpend.address":reGender,
			   					"userExpend.birthday":reBirthday,
			   					"userExpend.userId":userId,
			   				},
			   				dataType:"json",
			   				type:"post",
			   				async:true,
			   				success:function(data){
			   					console.log(data)
			   				}
			   			});
			   			
//			   			调用第二个注册接口
				$(".register-jump,.register-jumpBg").removeClass("register-hide")
			})
			$("#register-back").click(function(){
				$(".register-jump,.register-jumpBg").addClass("register-hide")
			})
			
			$("#reNextStep").click(function(){
				var registerPd=document.getElementById("registerPd").value
				var confirmPd=document.getElementById("confirmPd").value
				var mobileNum=document.getElementById("mobileNum").value
				var confirmCode=document.getElementById("confirmCode").value
				console.log(registerPd)
				console.log(confirmPd)
				console.log(mobileNum)
				console.log(confirmCode)
				console.log("徐潇飞")

				
				if(registerPd==confirmPd&&registerPd!=""&&confirmPd!=""){
//					调用第一个注册的接口
							$.ajax({
			   				url:"http://47.100.46.113:8080/app/user/register",
			   				data:{
			   					mobile:mobileNum,
			   					mobileCheckCode:confirmCode,
			   					userPassword:registerPd,
			   					confirmPwd:confirmPd
			   				},
			   				dataType:"json",
			   				type:"post",
			   				async:true,
			   				success:function(data){
			   					console.log(data)
//			   					获取第一步注册的用户id
			   					var userId=data.data.user.id
			   					console.log(userId)
//			   					alert(userId)
//				存储数据到localstorage
								localStorage.setItem("userId",userId)
//			        存储数据到localstorage
								window.location.href='registerSecondStep.html'
			   				}
			   			});
//					调用第一个注册的接口
					
				}else if(registerPd==""||confirmPd==""){
					alert("密码不能为空")
				}else if(registerPd!=confirmPd){
					alert("两次密码不相同")
				}
			})
		})
//		获取短信验证码
//		$(function() {
//  		$(function() {
//      		$("#codeBtn").click(settime);
//  		});
//		});
		var countdown = 60;
		function settime() {
    		if(countdown == 0) {
        	$("#codeBtn").attr("disabled", false);
        	$("#codeBtn").attr("value", "获取验证码");
        	countdown = 60;
    		} else {
        	$("#codeBtn").attr("disabled", true);
        	$("#codeBtn").attr("value", "重新发送(" + countdown + ")");
        	countdown--;
        	setTimeout(settime, 1000)
    		}
		}
		
//		服务页面切换
//		$(function(){
//			$(".service-nav").find("li").mousemove(function(){
//				$(this).find("span").addClass("service-colorChange")
//				$(this).siblings().children("span").removeClass("service-colorChange")
//				var index=$(this).index()
//				if(index==0){
//					$(".service-content").removeClass("hide")
//					$(".service-content1,.service-content2,.service-content3").addClass("hide")
//				}else if(index==1){
//					$(".service-content1").removeClass("hide")
//					$(".service-content,.service-content2,.service-content3").addClass("hide")
//				}else if(index==2){
//					$(".service-content2").removeClass("hide")
//					$(".service-content,.service-content1,.service-content3").addClass("hide")
//				}else if(index==3){
//					$(".service-content3").removeClass("hide")
//					$(".service-content,.service-content2,.service-content1").addClass("hide")
//				}
//			})
//		})
		
//		查找技术页面切换
		$(function(){
			$(".searchTech-nav").find("li").mousemove(function(){
				$(this).find("span").addClass("searchTech-colorChange")
				$(this).siblings().children("span").removeClass("searchTech-colorChange")
				var index=$(this).index()
//				console.log(index)
				if(index==0){
					$(".searchTech-content1").removeClass("hide")
					$(".searchTech-content2,.searchTech-content3").addClass("hide")
				}else if(index==1){
					$(".searchTech-content2").removeClass("hide")
					$(".searchTech-content1,.searchTech-content3").addClass("hide")
				}else if(index==2){
					$(".searchTech-content3").removeClass("hide")
					$(".searchTech-content1,.searchTech-content2").addClass("hide")
				}
			})
		})
		
//		科技进展页面切换
//		$(function(){
//			$(".ScienceProgress-nav").find("li").mousemove(function(){
//				$(this).find("span").addClass("SP-colorChange")
//				$(this).siblings().children("span").removeClass("SP-colorChange")
//				var index=$(this).index()
//				if(index==0){
//					var scienceId=7
//					$(".ScienceProgress-content").removeClass("hide")
//					$(".ScienceProgress-content1,.ScienceProgress-content2,.ScienceProgress-content3,.ScienceProgress-content4,.ScienceProgress-content5").addClass("hide")
//				}else if(index==1){
//					var scienceId=8
//					$(".ScienceProgress-content1").removeClass("hide")
//					$(".ScienceProgress-content,.ScienceProgress-content2,.ScienceProgress-content3,.ScienceProgress-content4,.ScienceProgress-content5").addClass("hide")
//				}else if(index==2){
//					var scienceId=9
//					$(".ScienceProgress-content2").removeClass("hide")
//					$(".ScienceProgress-content1,.ScienceProgress-content,.ScienceProgress-content3,.ScienceProgress-content4,.ScienceProgress-content5").addClass("hide")
//				}else if(index==3){
//					var scienceId=10
//					$(".ScienceProgress-content3").removeClass("hide")
//					$(".ScienceProgress-content1,.ScienceProgress-content2,.ScienceProgress-content5,.ScienceProgress-content4,.ScienceProgress-content").addClass("hide")
//				}else if(index==4){
//					var scienceId=11
//					$(".ScienceProgress-content4").removeClass("hide")
//					$(".ScienceProgress-content1,.ScienceProgress-content2,.ScienceProgress-content3,.ScienceProgress-content,.ScienceProgress-content5").addClass("hide")
//				}else if(index==5){
//					var scienceId=12
//					$(".ScienceProgress-content5").removeClass("hide")
//					$(".ScienceProgress-content1,.ScienceProgress-content2,.ScienceProgress-content3,.ScienceProgress-content4,.ScienceProgress-content").addClass("hide")
//				}
//
//			$.ajax({
// 				url:"http://47.100.46.113:8080/app/news/list",
// 				data:{
// 					'page.current':1,
//                  'page.total':8,
//                  'channelId':scienceId
// 				},
// 				dataType:"json",
// 				type:"get",
// 				async:true,
// 				success:function(data){
//					var pageList=data.data.page.list
//					console.log(pageList)
// 					new Vue({
// 						el:'#cube4',
// 						data:{
//		            		list4: pageList
//		        		},
// 					})
// 					
// 						
// 						$("#cube4").find("li").click(function(){
// 						var column=$(this).index()
// 						console.log(column)
// 						var newsId=pageList[column].id;
// 						console.log(newsId)
// 						var url1="new_file.html?id="
// 						var url2=newsId
// 						var url3=url1+url2
// 						console.log(url3)
// 						window.location.href=url3
// 					})
//
// 				}
// 			});
   			
//			科技进展页面点击切换换新闻
//			})
//		})
		
//		专家库页面点击切换
//		$(function(){
//			$(".ExpertDatabase-nav").find("li").mousemove(function(){
//				$(this).find("span").addClass("ED-colorChange")
//				$(this).siblings().children("span").removeClass("ED-colorChange")
//				var index=$(this).index()
//				if(index==0){
//					$(".ExpertDatabase-Content").removeClass("hide")
//					$(".ExpertDatabase-Content1,.ExpertDatabase-Content2").addClass("hide")
//				}else if(index==1){
//					$(".ExpertDatabase-Content1").removeClass("hide")
//					$(".ExpertDatabase-Content,.ExpertDatabase-Content2").addClass("hide")
//				}else if(index==2){
//					$(".ExpertDatabase-Content2").removeClass("hide")
//					$(".ExpertDatabase-Content1,.ExpertDatabase-Content").addClass("hide")
//				}
//			})
//		})
		
	
	function checkMobile(str) {
			  var re = /^1\d{10}$/
			  if (re.test(str)) {
			    alert("正确");
			    settime()  //调用获取短信重新发送的功能
			  } else {
			    alert("请输入正确的手机号格式");
			  }
			}
	
//		登录注册页面 
		$(function(){
			$("#user-login").click(function(){
				var username=document.getElementById("username").value
				var userpd=document.getElementById("userpd").value
				console.log(username)
				if(username==''){
					$(".register-jump,.register-jumpBg").removeClass("register-hide")
//					alert("用户名不能为空")
				}else{
//					登录时调用ajax接口
				$.ajax({
   				url:"http://47.100.46.113:8080/app/user/login",
   				data:{
   					loginType:"account",
   					account:username,
   					userPassword:userpd,
   					mobile:username,
   				},
   				dataType:"json",
   				type:"post",
   				async:true,
   				success:function(data){
   					console.log("徐潇飞")
   					console.log(data)
   					var uniqueId=data.data.user.id
   					var userState=data.data.user.isavalible
   					
   					localStorage.setItem("uniqueId",uniqueId)
   					localStorage.setItem("userState",userState)
   					console.log(uniqueId)
   					console.log(userState)
   					console.log("徐潇飞")
   					// 		登录时调用ajax接口
   					alert("登录成功")
     				window.location.href='personalCenter.html'
   				}
   			});
					
				}
			})
			
			$("#codeBtn").click(function(){
				var mobileNum=document.getElementById("mobileNum").value
				console.log(mobileNum)
				checkMobile(mobileNum);
//				通过ajax调用发送短信接口
				$.ajax({
   				url:"http://47.100.46.113:8080/app/msg/sendMobileCode",
   				data:{
   					mobile:mobileNum,
   					sendType:1
   				},
   				dataType:"json",
   				type:"post",
   				async:true,
   				success:function(data){
   					console.log(data)
   					console.log("徐潇飞")
   				}
   			});
//				通过ajax调用发送短信接口
			})
			
		})



//         点击我的检测用户是否登录,然后选择跳转页面
			$(function(){
				$("#PersonalCenter").click(function(){
					var uniqueId=localStorage.getItem("uniqueId") 
					var userState=localStorage.getItem("userState")
					console.log(uniqueId)
					console.log(userState)
					if(uniqueId=""||userState!=1){
						window.location.href='html/login.html'
					}else if(userState==1){
						window.location.href='html/personalCenter.html'
					}
//						window.location.href='personalCenter.html'
				})
				
				$("#PersonalCenter1,#PersonalCenter2").click(function(){
					var uniqueId=localStorage.getItem("uniqueId") 
					var userState=localStorage.getItem("userState")
					console.log(uniqueId)
					console.log(userState)
					if(uniqueId=""||userState!=1){
						window.location.href='login.html'
					}else if(userState==1){
						window.location.href='personalCenter.html'
					}
//						window.location.href='personalCenter.html'
				})
				


			})
			//				退出登录页面退出登录功能
						$(function(){
							$(".loginOut-content2").click(function(){
								alert("徐潇飞")
								localStorage.removeItem("userState");
								window.location.href='login.html'
							})
						})








//		$.ajax({
//			url:'../script/expertData.json',
//			dataType:"json",
//			type:"get",
//			async:"true",
//			success:function(data){
//				console.log(data)
//				new Vue({
//					el:"#main",
//					list:["a","b","c","d","e"],  
//				})
//			}
//		})


//			 var data={ID:50};
//	$.ajax({
// 				url:"https://api.qulv.com/AppAPI/general/ChooiseIsland.aspx?islands=[%20{%20%20%22TopLineNum%22%20:%20%228%22,%20%22EnName%22%20:%20%22Dubai%22%20}%20]",
// 				data:data,
// 				dataType:"jsonp",
// 				type:"get",
// 				async:true,
// 				success:function(data){
// 					console.log(data);
// 					var msg=data.Data[0].LineList;
// 					for(var i=0;i<msg.length;i++){
//					var name=msg[i].Name;
//					$(".swiper2 .x-moreRoute01").eq(i).find(".x-moreRouteName").text(name);
// 					var picLink=msg[i].PicLink;
//					$(".swiper2 .x-moreRoute01").eq(i).find(".x-moreRouteImg01").attr('src',picLink);
//					var price=msg[i].Price;
//					$(".x-moreRoutePrice01").eq(i).find("big").text(price);
//					var id3=msg[i].ID;
//					var id4="http://m.qulv.com/Newdetail/Detail/detail.html?id=";
//					var id5=id4+id3;
//					$(".swiper2 .x-moreRoute01").eq(i).find(".xx-07MiddleA01").attr('href',id5);
// 					}
// 				}
// 			});

//			 var data={ID:50};
//	$.ajax({
// 				url:"http://47.100.46.113:8080/app/msg/sendMobileCode",
// 				data:data,
// 				dataType:"jsonp",
// 				type:"post",
// 				async:true,
// 				success:function(data){
// 					
//
// 				}
// 			});