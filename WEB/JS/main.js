
const html = document.documentElement;
const canvas = document.querySelector('.hero-lightpass');
const context = canvas.getContext('2d');
const currentFrame = _index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`)

 