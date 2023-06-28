<script lang="ts">
  export let style: string = "";
</script>

<section style="{style}">
	<div class="clock">
		<svg viewBox="0 0 36 36" class="circular-chart">
  <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"/>
  <path class="circle"
        stroke-dasharray="0, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"/>
</svg>

	</div>
</section>


<style>
	
	.circular-chart {
  display: block;
  margin: 10px auto;
  width: 100%;
  aspect-ratio: 1/1;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke: var(--color, #4bc0c0);
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
  100% {
    stroke-dasharray: var(--progress) 100; /* The first number should be the percentage of the circle you want to fill */
  }
}

</style>