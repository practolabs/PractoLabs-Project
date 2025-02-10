const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies;

const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine
});

const pendulum = Bodies.circle(400, 200, 20);
const string = Bodies.rectangle(400, 100, 5, 100, { isStatic: true });

World.add(engine.world, [pendulum, string]);
Engine.run(engine);
Render.run(render);
