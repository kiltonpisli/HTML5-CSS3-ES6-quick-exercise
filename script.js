$(".post-link").click(function(){
    var postId = this.dataset.sku;
    var postUrl = "https://jsonplaceholder.typicode.com/posts/"+postId;

    $.ajax({
        method: "GET",
        url: postUrl
    }).done(function(res){
        if(!$("#post-"+res.id).length){
            var card = createPost(res.id, res.title, res.body);
            $("#cards-holder").append(card);
        }
    })
});

$("#remover").click(function(){
    $("#cards-holder").empty();
});

$(document).on("click", ".remove-button", function() {
    $(this).parent().parent().remove();
});

function createPost(id, title, body){
    var imgUrl = "https://images.unsplash.com/photo-1602883522093-3bb023cc4f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
    var post = '<div class="post" id="post-'+id+'"><img class="card-background" src="'+imgUrl+'"><div class="content"><h1 class="post-title">'+title+
                '</h1><p class="post-body">'+body+'</p><a href="#" id="'+id+'" class="remove-button">remove post</a></div></div>';

    return post;
}

$("#card-trigger").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(this).addClass("active");
    }
});