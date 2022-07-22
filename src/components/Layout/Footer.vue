<script setup>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { useDataStore } from "@/store/Data";

const dataStore = useDataStore();
</script>
<template>
  <footer>
    <div class="footer-container container">
      <div class="contact">
        <img src="/media/footer-img.png" alt="footer-img" />
        <div class="contact-text">
          <h6 class="contact-text-title">Contact</h6>
          <p class="contact-text-container">
            Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok
            No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul Email:bilgi@tesodev.com
          </p>
        </div>
      </div>
      <yandexMap
        class="map"
        :settings="dataStore.mapSettings"
        :coords="dataStore?.mapSettings?.coords"
      >
        <ymapMarker
          :coords="dataStore?.mapSettings?.coords"
          marker-id="123"
          hint-content="some hint"
        />
      </yandexMap>
    </div>
  </footer>
</template>
