import { ref } from 'vue';

//          ╔═════════════════════════════════════════════════════════╗
//          ║                        USEALERT                         ║
//          ╚═════════════════════════════════════════════════════════╝
export default function useAlert(startVisible = false) {
  const alertIsVisible = ref(startVisible);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
