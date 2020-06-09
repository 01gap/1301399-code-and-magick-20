'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP_Y = 15;
var GAP_X = 50;
var GREETINGS_HEIGHT = 60;
var SCORE_HEIGHT = 30;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 50);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_Y);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(212, ' + Math.floor(Math.random() * 101) + '% , 50%)';
    }
    var playerHeight = MAX_BAR_HEIGHT * times[i] / maxTime;
    ctx.fillRect(CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i,
        CLOUD_Y + GREETINGS_HEIGHT + SCORE_HEIGHT + MAX_BAR_HEIGHT - playerHeight,
        BAR_WIDTH,
        playerHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]),
        CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i,
        CLOUD_Y + GREETINGS_HEIGHT + SCORE_HEIGHT + MAX_BAR_HEIGHT - playerHeight - GAP_Y);
  }
};
