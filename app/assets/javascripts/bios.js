  $(function(){
    $('#submit').click(function(){
    var post = $('<div/>').text($('#idea').val()).html();
		var posts = $('#ideaList').html();
		posts = '<li>' + post + '<br>（投稿日:　' + timeString(new Date()) + '）</li>' + posts;
		$('#ideaList').html(posts);
		$('#idea').val('');
		localStorage.setItem('idea', $('#ideaList').html());
  });

  //削除する
  　$(function(){
     $('#delete').click(function(){
       window.alert("本当に削除しますか？");
       $('#ideaList').html("");
       localStorage.removeItem('idea');
     });
  });

  //更新しても表示させる
  if(localStorage.getItem('idea')) {
		$('#ideaList').html(localStorage.getItem('idea'));
	}

//日付の取得
function timeString(date) {
		return date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日' + date.getHours() + '時' + date.getMinutes() + '分' + date.getSeconds() + '秒';
	};

});
