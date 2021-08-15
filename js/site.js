function resize_figure_anger(cwidth, cheight, width, height) {
    var figure_width = Math.floor(width * (cwidth / 1920));
    var figure_height = Math.floor(figure_width / width * height);
    var figure = document.getElementById('figure-anger');
    figure.style.width = figure_width + 'px';
    figure.style.height = figure_height + 'px';
    figure.style.bottom = Math.floor(figure_width * -0.3) + 'px';
}

function resize_figure_grunge(cwidth, cheight, width, height) {
    var figure_width = Math.floor(width * (cwidth / 1920));
    var figure_height = Math.floor(figure_width / width * height);
    var figure = document.getElementById('figure-grunge');
    figure.style.width = figure_width + 'px';
    figure.style.height = figure_height + 'px';
    figure.style.right = Math.floor(figure_width * -0.1) + 'px';
    figure.style.top = Math.floor(figure_width * -0.1) + 'px';
}

function resize_figure_huncho(cwidth, cheight, width, height) {
    var figure_width = Math.floor(width * (cwidth / 1920));
    var figure_height = Math.floor(figure_width / width * height);
    var figure = document.getElementById('figure-huncho');
    figure.style.width = figure_width + 'px';
    figure.style.height = figure_height + 'px';
    figure.style.right = Math.floor(figure_width * -0.1) + 'px';
    figure.style.bottom = Math.floor(figure_width * -0.1) + 'px';
}

function resize_figure_logo(cwidth, cheight, width, height) {
    var figure_width = Math.min(cwidth, width);
    var figure_height = Math.floor(figure_width / width * height);
    var figure = document.getElementById('figure-logo');
    figure.style.width = figure_width + 'px';
    figure.style.height = figure_height + 'px';
    figure.style.left = Math.floor((cwidth / 2) - (figure_width / 2)) + 'px';
    figure.style.top = Math.floor((cheight / 2) - (figure_height / 2)) + 'px';
}

function resize_figure_scream(cwidth, cheight, width, height) {
    var figure_width = Math.floor(width * (cwidth / 1920));
    var figure_height = Math.floor(figure_width / width * height);
    var figure = document.getElementById('figure-scream');
    figure.style.width = figure_width + 'px';
    figure.style.height = figure_height + 'px';
    figure.style.right = Math.floor(figure_width * -0.1) + 'px';
    figure.style.bottom = Math.floor(figure_width * -0.1) + 'px';
}

function resize_figure_ysl_for_life(cwidth, cheight, width, height) {
    var figure_width = Math.floor(width * (cwidth / 1920));
    var figure_height = Math.floor(figure_width / width * height);
    var figure = document.getElementById('figure-ysl-for-life');
    figure.style.width = figure_width + 'px';
    figure.style.height = figure_height + 'px';
    figure.style.left = Math.floor(figure_width * -0.1) + 'px';
    figure.style.top = Math.floor(figure_width * -0.1) + 'px';
}

function handle_resize() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    resize_figure_anger(width, height, 450, 450);
    resize_figure_grunge(width, height, 589, 689);
    resize_figure_huncho(width, height, 812, 439);
    resize_figure_logo(width, height, 711, 471);
    resize_figure_scream(width, height, 695, 612);
    resize_figure_ysl_for_life(width, height, 812, 599);
}

window.onresize = handle_resize;

handle_resize();

new Parallax(
    document.getElementsByTagName('main')[0]
);
