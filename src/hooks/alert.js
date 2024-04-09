import { ref } from 'vue';

//          ╔═════════════════════════════════════════════════════════╗
//          ║                        USEALERT                         ║
//          ╚═════════════════════════════════════════════════════════╝
export default function useAlert() {
  const alertIsVisible = ref(false);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
