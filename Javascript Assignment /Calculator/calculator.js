function pick(value) {
      const input = document.getElementById('a');
      input.value += value;
    }

    function solve() {
      const input = document.getElementById('a');
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = 'Error';
      }
    }

    function clearInput() {
      document.getElementById('a').value = '';
    }