<script setup lang="ts">

</script>
<template>
    <component :is="$route.meta.layout  || 'section' " >
    </component>
</template>