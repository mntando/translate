// Run once DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    var input = 'english';
    let option = document.querySelector('#translate');
    option.addEventListener('change', function() {
        let output = document.querySelectorAll('.translate');
        for (let i = 0; i < output.length; i++) {
            translate(output[i].textContent, {to: this.value, from: input}).then(function(res) {
                output[i].textContent = res;
            });
        }
        input = this.value;
    }, false);
});
