<script>
  import Matter, {
    Engine,
    Runner,
    MouseConstraint,
    Mouse,
    World,
  } from 'matter-js';
  import MatterDomPlugin from 'matter-dom-plugin';

  import { onMount } from 'svelte';

  import badges from '$lib/badges.js';

  Matter.use('matter-dom-plugin');
  const { RenderDom, DomBodies, DomMouseConstraint } = Matter;

  let worldContainer;
  let containerHeight;
  $: containerHeight;
  let containerWidth;
  $: containerWidth;

  let floorEl;
  let ballEl = [];
  let leftWallEl;
  let rightWallEl;

  onMount(() => {
    const engine = Engine.create();
    const world = engine.world;
    const runner = Runner.create();
    Runner.run(runner, engine);

    const render = RenderDom.create({
      engine: engine,
    });
    RenderDom.run(render);

    /** Initialize physics bodies **/
    const floor = DomBodies.block(containerWidth / 2, containerHeight, {
      Dom: {
        render: render,
        element: floorEl,
      },
      isStatic: true,
    });
    const leftWall = DomBodies.block(0, containerHeight / 2, {
      Dom: {
        render: render,
        element: leftWallEl,
      },
      isStatic: true,
    });
    const rightWall = DomBodies.block(containerWidth, containerHeight / 2, {
      Dom: {
        render: render,
        element: rightWallEl,
      },
      isStatic: true,
    });
    const balls = ballEl.map((ball, i) => {
      return DomBodies.block(50 * (i + 2), 20 * Math.random(), {
        Dom: {
          render: render,
          element: ball,
        },
        mass: 0.001,
        angularVelocity: 0.01,
        friction: 1,
      });
    });
    console.log(balls);
    World.add(world, [floor, leftWall, rightWall, ...balls]);

    /** Mouse control **/
    var mouse = Mouse.create(document.body);
    var MouseConstraint = DomMouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: {
          visible: false,
        },
      },
    });

    World.add(world, MouseConstraint);
  });
</script>

<div id="debug" />
<div
  bind:this={worldContainer}
  bind:offsetHeight={containerHeight}
  bind:clientWidth={containerWidth}
  class="w-screen h-screen bg-slate-400 overflow-hidden"
>
  <div bind:this={floorEl} class="h-8 w-screen bg-red-500 absolute" />
  <div bind:this={leftWallEl} class="h-screen w-8 bg-red-500 absolute" />
  <div bind:this={rightWallEl} class="h-screen w-8 bg-red-500 absolute" />
  {#each Array(20) as _, i}
    <div
      bind:this={ballEl[i]}
      class="h-8 w-56 bg-purple-500 unselectable absolute flex justify-center items-center"
    >
      Hello Lorem Ipsum
    </div>
  {/each}
</div>

<style>
  .unselectable {
    cursor: grab;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .unselectable:active {
    cursor: grabbing;
  }
</style>
