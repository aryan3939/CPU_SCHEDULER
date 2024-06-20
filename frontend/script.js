// document.addEventListener('DOMContentLoaded', () => {
//     const numProcessesInput = document.getElementById('noOfProcess');
//     const addProcessButton = document.getElementById('add-process');
//     const processesDiv = document.getElementById('processes');

//     numProcessesInput.addEventListener('input', createrows);
    
//     function createRows() {
        
//         const numProcesses = parseInt(numProcessesInput.value);
//         processes.innerHTML = '';

//         if (isNaN(numProcesses) || numProcesses <= 0) {
//             return;
//         }

//         for (let i = 0; i < numProcesses; i++) {
//             const processDiv = document.createElement('div');
//             processDiv.classList.add('process');
//             processDiv.innerHTML = `
//                 <label>Arrival Time: <input type="number" name="arrivalTime" placeholder="Enter Data"></label>
//                 <label>Burst Time: <input type="number" name="burstTime" placeholder="Enter Data"></label>
//                 <label>Priority: <input type="number" name="priority" placeholder="Enter Data"></label>
//             `;
//             document.getElementById('processes').appendChild(processDiv);
//         }
//     }

// });
document.addEventListener("DOMContentLoaded", function() {
    const noOfProcessInput = document.querySelector('input[name="noOfProcess"]');
    const processesContainer = document.getElementById('processes');
    const resetButton = document.getElementById('resetBtn');

    // Function to create process input fields
    function createProcessFields(num) {
        // Clear existing process fields
        processesContainer.innerHTML = '';

        for (let i = 0; i <= num; i++) {
            const processDiv = document.createElement('div');
            processDiv.classList.add('process');

            if(i === 0) {
                processDiv.innerHTML = `
                    <label style="margin-right: 90px;">Arrival Time </label>
                    <label  style="margin-right: 101px;">Burst Time</label>
                    <label  style="margin-right: 90px;">Priority</label>
                `;
            } else {

            processDiv.innerHTML = `
                <label><input type="number" name="arrivalTime" placeholder="Enter Data"></label>
                <label><input type="number" name="burstTime" placeholder="Enter Data"></label>
                <label><input type="number" name="priority" placeholder="Enter Data"></label>
            `;
            }

            processesContainer.appendChild(processDiv);
        }
    }

    // Event listener for noOfProcess input
    noOfProcessInput.addEventListener('input', function() {
        const numProcesses = parseInt(noOfProcessInput.value);
        if (!isNaN(numProcesses) && numProcesses > 0) {
            createProcessFields(numProcesses);
        } else {
            // processesContainer.innerHTML = '';
            // processDiv.innerHTML = `
            processesContainer.innerHTML = `
                <label><input type="number" name="arrivalTime" placeholder="Enter Data"></label>
                <label><input type="number" name="burstTime" placeholder="Enter Data"></label>
                <label><input type="number" name="priority" placeholder="Enter Data"></label>
            `;
        }
    });

    // Add process button (kept for manual addition if needed)
    document.getElementById('add-process').addEventListener('click', () => {
        const processDiv = document.createElement('div');
        processDiv.classList.add('process');
        processDiv.innerHTML = `
            <label><input type="number" name="arrivalTime" placeholder="Enter Data"></label>
            <label><input type="number" name="burstTime" placeholder="Enter Data"></label>
            <label><input type="number" name="priority" placeholder="Enter Data"></label>
        `;
        processesContainer.appendChild(processDiv);
    });

    // Form submission handler
    document.getElementById('scheduler-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const processes = Array.from(document.querySelectorAll('.process')).map(processDiv => {
            const arrivalTime = processDiv.querySelector('input[name="arrivalTime"]').value;
            const burstTime = processDiv.querySelector('input[name="burstTime"]').value;
            const priority = processDiv.querySelector('input[name="priority"]').value;
            return { arrivalTime, burstTime, priority };
        });

        const totalProcesses = processes.length;
        const quantumTime = document.querySelector('input[name="quantumTime"]').value;

        const response = await fetch('/run-scheduler', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ processes, totalProcesses, quantumTime })
        });

        const result = await response.text();
        document.getElementById('output').innerText = result;
        output.style.display = 'block';
    });

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', () => {
        document.getElementById('scheduler-form').reset();
        
        // processesContainer.innerHTML = '';
        output.style.display = 'none';
    });

    
    
});
