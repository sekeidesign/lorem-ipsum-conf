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
    const balls = ballEl.map((ball, i) => {
      return DomBodies.block(100 * (i + 1), 10, {
        Dom: {
          render: render,
          element: ball,
        },
      });
    });
    World.add(world, [floor, ...balls]);
  });
</script>

<div id="debug" />
<div
  bind:this={worldContainer}
  bind:offsetHeight={containerHeight}
  bind:clientWidth={containerWidth}
  class="w-screen h-screen bg-slate-400"
>
  <div bind:this={floorEl} class="h-8 w-screen bg-red-500 absolute" />
  {#each [1, 2, 3, 4] as _, i}
    <div
      bind:this={ballEl[i]}
      class="h-8 w-8 bg-purple-500 rounded-full absolute"
    />
  {/each}
</div>
