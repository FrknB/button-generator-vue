<template>
  <div id="app">
    <router-view />
    <div class="container">
      <div class="button-property">
        <div class="showBox" @click="showProperty = !showProperty">
          <h2>Genel Ayarlar</h2>
          <i class="bi bi-chevron-double-down"></i>
        </div>

        <div class="height-width" v-if="showProperty">
          <div class="property-box">
            <label for="width-input">Genişlik</label>
            <input
              type="number"
              value=""
              id="width-input"
              placeholder="Şuanki 100px"
            />
          </div>
          <div class="property-box">
            <label for="height-input">Yükseklik</label>
            <input
              type="number"
              value=""
              id="height-input"
              placeholder="Şuanki 40px"
            />
          </div>
          <div class="property-box">
            <label for="text-color-input">Text Color</label>
            <input
              type="color"
              value=""
              id="text-color-input"
              placeholder="Renk Giriniz"
            />
          </div>
          <div class="property-box">
            <label for="btn-bg-color">Background Color</label>
            <input
              type="color"
              value=""
              id="btn-bg-color"
              placeholder="Renk Giriniz"
            />
          </div>
        </div>

        <div class="bgcolor-color" v-if="showProperty">
          <div class="property-box">
            <label for="border-input">Border Width</label>
            <input
              type="number"
              value=""
              id="border-input"
              placeholder="değer giriniz."
            />
          </div>
          <div class="property-box">
            <label>Border Style</label>
            <select id="border-style-input" v-model="borderStyleInput">
              <option value="none">none</option>
              <option value="solid">Solid</option>
              <option value="dotted">Dotted</option>
              <option value="underline">Underline</option>
            </select>
          </div>
          <div class="property-box">
            <label for="color-input">Border Color</label>
            <input type="color" id="color-input" placeholder="değer giriniz." />
          </div>
          <div class="property-box">
            <label for="border-radius-input">Border Radius</label>
            <input
              type="number"
              id="border-radius-input"
              placeholder="değer giriniz."
            />
          </div>
        </div>

        <div class="pd-mg" v-if="showProperty">
          <div class="property-box">
            <label for="padding-input">Padding</label>
            <input
              type="number"
              id="padding-input"
              placeholder="değer giriniz."
            />
          </div>
          <div class="property-box">
            <label for="margin-input">Margin</label>
            <input
              type="number"
              id="margin-input"
              placeholder="değer giriniz."
            />
          </div>
        </div>

        <div class="text-style" v-if="showProperty">
          <div class="property-box">
            <label for="font-size-input">Font Size</label>
            <input
              type="number"
              id="font-size-input"
              placeholder="değer giriniz."
            />
          </div>
          <div class="property-box">
            <label for="font-family-input">Font Family</label>
            <input
              type="text"
              id="font-family-input"
              disabled
              placeholder="değer giriniz."
            />
          </div>
          <div class="property-box">
            <label for="font-weight-input">Font Weight</label>
            <input
              type="text"
              id="font-weight-input"
              placeholder="değer giriniz."
            />
          </div>
        </div>

        <div class="align-decoration" v-if="showProperty">
          <div class="property-box">
            <label>Text Align</label>
            <select id="text-align-input" v-model="selectedTextAlign">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div class="property-box">
            <label>Text Decoration</label>
            <select
              id="text-decoration-input"
              v-model="textDecorationModel"
              disabled
            >
              <option value="underline">underline</option>
              <option value="dotted">dotted</option>
              <option value="double">double</option>
              <option value="line-though">line-though</option>
              <option value="none">none</option>
              <option value="overline">overline</option>
              <option value="solid">solid</option>
              <option value="wavy">wavy</option>
            </select>
          </div>

          <div class="property-box">
            <label>Cursor</label>
            <select id="cursor-input" v-model="selectedCursor">
              <option value="alias">alias</option>
              <option value="all-scroll">all-scroll</option>
              <option value="auto" selected>auto</option>
              <option value="cell">cell</option>
              <option value="col-resize">col-resize</option>
              <option value="context-menu">context-menu</option>
              <option value="copy">copy</option>
              <option value="crosshair">crosshair</option>
              <option value="default">default</option>
              <option value="e-resize">e-resize</option>
              <option value="ew-resize">ew-resize</option>
              <option value="grab">grab</option>
              <option value="grabbing">grabbing</option>
              <option value="help">help</option>
              <option value="move">move</option>
              <option value="n-resize">n-resize</option>
              <option value="ne-resize">ne-resize</option>
              <option value="nesw-reisze">nesw-reisze</option>
              <option value="no-drop">no-drop</option>
              <option value="none">none</option>
              <option value="not-allowed">not-allowed</option>
              <option value="ns-resize">ns-resize</option>
              <option value="nw-resize">nw-resize</option>
              <option value="nwse-resize">nwse-resize</option>
              <option value="pointer">pointer</option>
              <option value="progress">progress</option>
              <option value="row-resize">row-resize</option>
              <option value="s-resize">s-resize</option>
              <option value="se-resize">se-resize</option>
              <option value="sw-resize">sw-resize</option>
              <option value="text">text</option>
              <option value="vertical-text">vertical-text</option>
              <option value="w-resize">w-resize</option>
              <option value="wait">wait</option>
              <option value="zoom-in">zoom-in</option>
              <option value="zoom-out">zoom-out</option>
            </select>
          </div>
        </div>
      </div>

      <div class="buttons">
        <div class="submit">
          <button type="submit" @click="change">Değiştir</button>
        </div>

        <div class="button-container">
          <h1>Buton Çıktısı</h1>
          <button id="change">Buton</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      showProperty: true,
      showHoverProperty: false,
    };
  },

  setup() {
    const borderStyleInput = ref("");
    const selectedTextAlign = ref("");
    const textDecorationModel = ref("");
    const selectedCursor = ref("default");
    const hoverBorderStyleInput = ref("");

    function change() {
      let changeButton = document.getElementById("change");

      let widthValue = document.getElementById("width-input");
      let heightValue = document.getElementById("height-input");
      let textColor = document.getElementById("text-color-input");
      let bgColor = document.getElementById("btn-bg-color");

      let colorValue = document.getElementById("color-input");
      let borderValue = document.getElementById("border-input");
      let borderRadiusValue = document.getElementById("border-radius-input");

      let paddingValue = document.getElementById("padding-input");
      let marginValue = document.getElementById("margin-input");

      let fontSizeValue = document.getElementById("font-size-input");
      let fontFamilyValue = document.getElementById("font-family-input");
      let fontWeightValue = document.getElementById("font-weight-input");

      let textAlignValue = document.getElementById("text-align-input");
      let textDecorationValue = document.getElementById(
        "text-decoration-input"
      ).value;

      /* change button  */
      changeButton.style.width = widthValue.value + "px";
      changeButton.style.height = heightValue.value + "px";
      changeButton.style.color = textColor.value;
      changeButton.style.backgroundColor = bgColor.value;

      changeButton.style.borderWidth = borderValue.value + "px ";
      changeButton.style.borderStyle = borderStyleInput.value + " ";
      changeButton.style.borderColor = colorValue.value;
      changeButton.style.borderRadius = borderRadiusValue.value + "px";

      changeButton.style.padding = paddingValue.value + "px";
      changeButton.style.margin = marginValue.value + "px";

      changeButton.style.fontSize = fontSizeValue.value + "px";
      changeButton.style.fontFamily = fontFamilyValue.value;
      changeButton.style.fontWeight = fontWeightValue.value;

      changeButton.style.textAlign = selectedTextAlign.value;
      changeButton.style.textDecoration = textDecorationModel.value;
      changeButton.style.cursor = selectedCursor.value;
      /* change button end */
    }
    return {
      change,
      borderStyleInput,
      selectedTextAlign,
      textDecorationModel,
      selectedCursor,
    };
  },
};
</script>

<style >
body {
  background-color: gray;
}

.container {
  max-width: 1920px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 120px;
  padding: 0 220px;
}
.button-property {
  width: 80%;
  height: auto;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.height-width,
.bgcolor-color,
.edge-border,
.shadow-radius,
.pd-mg,
.text-style,
.align-decoration,
.cursor-disable {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: auto;
  padding: 2px;
}
.property-box input,
select {
  width: 120px;
  height: 34px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 6px;
  border: none;
  padding: 0 6px;
  outline: none;
}
.property-box select {
  color: black;
  font-weight: 500;
  outline: none;
}
.property-box label {
  color: white;
  font-weight: 500;
  font-size: 14px;
}
.submit {
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit button {
  font-size: 22px;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  outline: none;
  border: none;
  text-decoration: none;
  background-color: #1964c5;
  color: white;
  transition: 0.2s ease all;
}
.submit button:hover {
  background-color: #0a418a;
  box-shadow: 2px 1px 10px 4px #1d1d1d;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
.button-container h1 {
  color: white;
}
.buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-direction: column;
}
#change {
  width: 100px;
  height: 40px;
}
.showBox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(197, 197, 197);
  padding: 0 22px;
  border-radius: 10px;
  cursor: pointer;
}
h2 {
  font-size: 22px;
  display: flex;
  align-items: center;
}
i {
  color: black;
  font-size: 30px;
}

@media (max-width: 1440px) {
  .container {
    padding: 0 160px;
    gap: 80px;
  }
  .property-box label {
    color: white;
    font-weight: 500;
    font-size: 13px !important;
  }
  .buttons h1 {
    font-size: 24px;
  }
}
@media (max-width: 1100px) {
  .container {
    max-width: 1920px;
    gap: 0 80px;
    padding: 0 80px;
  }
  .button-container h1 {
    color: white;
    font-size: 20px;
  }
  .button-property {
    width: 80% !important;
    gap: 20px;
  }
}
@media (max-width: 920px) {
  .container {
    padding: 0 60px;
  }
  .property-box input,
  select {
    width: 100px;
    height: 34px;
  }
  .property-box label {
    font-size: 12px !important;
  }
  .button-property {
    width: 100%;
    gap: 20px;
  }
  .button-container h1 {
    color: white;
    font-size: 16px;
  }
}
@media (max-width: 768px) {
  .container {
    margin: 0;
    padding: 80px 0;
    flex-direction: column;
  }
}
@media (max-width: 584px) {
  .property-box label {
    font-size: 8px !important;
  }
  .button-property {
    width: 80%;
  }
  .property-box input,
  select {
    width: 88px;
    height: 32px;
  }
  .property-box select {
    font-weight: 500;
  }
}
@media (max-width: 515px) {
  .button-property {
    width: 100%;
  }
  .property-box input,
  select {
    width: 76px;
    height: 28px;
    font-size: 10px;
  }
  .property-box select {
    font-weight: 500;
  }
  .height-width,
  .bgcolor-color,
  .edge-border,
  .shadow-radius,
  .pd-mg,
  .text-style,
  .align-decoration,
  .cursor-disable {
    gap: 8px;
  }
}
@media (max-width: 416px) {
  .container{
    padding: 80px 0;
  }
  .property-box label {
    font-size: 7px !important;
  }
  .property-box input,
  select {
    width: 66px;
    height: 24px;
    font-size: 10px;
  }
  .height-width,
  .bgcolor-color,
  .edge-border,
  .shadow-radius,
  .pd-mg,
  .text-style,
  .align-decoration,
  .cursor-disable {
    gap: 4px;
  }
}
@media (max-width: 320px){
  .container{
    padding: 80px 0;
  }
  .property-box input,
  select {
    width: 66px;
    height: 24px;
    font-size: 10px;
  }
}

</style>