<template>
  <div class="image-grid" v-if="images.length > 0">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="image-item"
      @click="openPreview(index)"
    >
      <img 
        :src="image.url" 
        :alt="image.alt"
        loading="lazy"
      />
      <div class="image-description" v-if="image.description">
        {{ image.description }}
      </div>
    </div>
    <ImagePreview
      :is-visible="isPreviewVisible"
      :image-url="currentPreviewImage?.url"
      :alt-text="currentPreviewImage?.alt"
      :description="currentPreviewImage?.description"
      :show-navigation="images.length > 1"
      @close="closePreview"
      @prev="prevImage"
      @next="nextImage"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ImagePreview from './ImagePreview.vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
});

const isPreviewVisible = ref(false);
const currentImageIndex = ref(0);

const currentPreviewImage = computed(() => 
  props.images[currentImageIndex.value]
);

const openPreview = (index) => {
  currentImageIndex.value = index;
  isPreviewVisible.value = true;
};

const closePreview = () => {
  isPreviewVisible.value = false;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin: 12px 0;
}

.image-item {
  position: relative;
  cursor: zoom-in;
  border-radius: var(--radius-sm);
  overflow: hidden;
  aspect-ratio: 1;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.image-item:hover img {
  transform: scale(1.05);
}

.image-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.image-item:hover .image-description {
  opacity: 1;
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style> 