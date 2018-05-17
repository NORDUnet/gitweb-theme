<script type="text/javascript">
  (function () {
    var $link = document.createElement('a');
    $link.classList.add('login');

    var $returnTo = encodeURIComponent(window.location.pathname + window.location.search + window.location.hash);

    function setLogOut() {
      $link.href = '/_mellon/logout?ReturnTo=' + $returnTo;
      $link.textContent = 'Log Out';
    }

    function setLogIn() {
      $link.href = '/_mellon/login?ReturnTo=' + $returnTo;
      $link.textContent = 'Log In';
    }

    document.addEventListener("DOMContentLoaded", function(event) {
      var $body = document.querySelector('body');
      $body.appendChild($link);
    }, false);

    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', '/', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var isLoggedin = xhr.getResponseHeader('Gitolite-User');
        if (isLoggedin) {
          setLogOut();
        } else {
            setLogIn();
        }
        console.log(isLoggedin);
      }
    }
    xhr.send(null);
  })();
</script>
