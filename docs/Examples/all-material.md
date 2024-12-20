---
layout: home
---

<script setup>

import { materialCategories, materialsList } from '../components/data/AllMaterial.js';
</script>

<AllMaterial 
  :categories="materialCategories"
  :materials-list="materialsList"
/>