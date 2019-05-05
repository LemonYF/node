function alertPopup(msg, href) {
    $('.error_text').text(msg);
    $('#errorBtn').click(function(){
        $('.mask').hide();
        $('#popup').hide();
        if(href !== undefined) {
            location.href = href;
        }
    });
    $('.mask').show();
    $('#popup').show();
    return false;
}

var fromUrlParameter = '';
function parseFrom(url) {
    var from = '';
    var fromType = '';
    var urlArr = url.split('?');
    if(urlArr.length == 2) {
        var paraArr = [];
        $.each(urlArr[1].split('&'), function(i, e){
            paraArr.push(e);
        });
        $.each(paraArr,function(i, e){
            var key = e.split('=')[0];
            var val = e.split('=')[1];
            if(key == 'from') {
                from = val;
            }
            if(key == 'fromType') {
                fromType = val;
            }
        });
    }
    from = from==''?'244000018':from.replace(/\D+/g,'');
    fromType = fromType==''?'1':fromType.replace(/\D+/g,'');
    fromUrlParameter = 'from='+from+'&fromType='+fromType;
}

function cleanCookie() {
    $.removeCookie('uid', { path: '/' });
    $.removeCookie('code', { path: '/' });
}