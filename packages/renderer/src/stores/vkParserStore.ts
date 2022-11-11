import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useVkParserStore = defineStore('vkParser', () => {
  const groupId = ref('');
  const pairedGroups = ref<any[]>([]);

  // const doubleCount = computed(() => count.value * 2);

  function startParsing() {
    console.log(groupId.value);
  }

  function addPairedGroup(group: any) {
    pairedGroups.value.push(group);
  }

  return { groupId, pairedGroups, startParsing, addPairedGroup };
});
