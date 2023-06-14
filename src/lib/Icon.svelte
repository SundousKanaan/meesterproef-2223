<script lang="ts">
    export let icon: string = 'profile';
</script>

<span class="icon icon-{icon}" />

<style>
    .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .icon-profile {
        background-color: hotpink;
    }

    .icon-trend {
        background-color: red;
    }
</style>