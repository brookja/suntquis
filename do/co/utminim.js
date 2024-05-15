const drawRect = (x, y, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const drawSnake = (snake, box) => {
  snake.forEach((segment, index) => {
    drawRect(segment.x, segment.y, box, box, index === 0 ? 'green' : 'white');
  });
};

const frame = () => {
  if (gameOver) return;

  drawRect(0, 0, canvas.width, canvas.height, 'white');
  drawRect(food.x, food.y, box, box, 'black');
  drawSnake(snake, box);

  ctx.fillStyle = 'black';
  ctx.font = '48px Arial';
  ctx.fillText(score, canvas.width - 120, 40);
};
