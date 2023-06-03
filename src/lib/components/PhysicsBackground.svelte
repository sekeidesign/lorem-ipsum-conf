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

  import TopicBadge from '$lib/components/TopicBadge.svelte';
  import Ai from '$lib/badges/ai.svg?component';
  import Design from '$lib/badges/design.svg?component';
  import Dev from '$lib/badges/dev.svg?component';
  import Product from '$lib/badges/product.svg?component';

  const topics = ['ai', 'design', 'dev', 'product'];
  const getTopic = (array, i) => array[Math.floor(i % array.length)];

  let containerHeight;
  $: containerHeight;
  let containerWidth;
  $: containerWidth;

  Matter.use('matter-dom-plugin');
  const { RenderDom, DomBodies, DomMouseConstraint } = Matter;

  let floorEl;
  let badgeEl = [];
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
    const floor = DomBodies.block(containerWidth / 2, containerHeight + 32, {
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
    const badges = badgeEl.map((badge, i) => {
      return DomBodies.block(
        containerWidth / 2 + (Math.random() - 0.5) * 160,
        -(Math.random() * 200),
        {
          Dom: {
            render: render,
            element: badge,
          },
        }
      );
    });
    console.log(badges);
    World.add(world, [floor, leftWall, rightWall, ...badges]);

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

<div
  bind:offsetHeight={containerHeight}
  bind:clientWidth={containerWidth}
  class="w-screen h-screen bg-neutral-100 overflow-hidden z-10 absolute top-0 left-0"
>
  <div bind:this={floorEl} class="h-16 w-screen absolute" />
  <div bind:this={leftWallEl} class="h-screen w-1 absolute" />
  <div bind:this={rightWallEl} class="h-screen w-1 absolute" />
  {#each topics as topic, i}
    <TopicBadge bind:element={badgeEl[i]} {topic} />
  {/each}
  {#each Array(20) as _, i}
    <TopicBadge
      bind:element={badgeEl[4 + i]}
      topic={getTopic(topics, i)}
      hasText={false}
    />
  {/each}
</div>

<div class="hidden">
  <div id="debug" />
</div>
