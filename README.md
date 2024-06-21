# CPU Scheduler

## Introduction

The CPU Scheduler is a project designed to simulate and visualize different CPU scheduling algorithms. This project helps users understand how various scheduling algorithms work and how they impact the performance and efficiency of process management in an operating system. The simulator allows for hands-on experimentation with different algorithms, providing valuable insights into their strengths and weaknesses in various scenarios.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Algorithms](#algorithms)
  - [First-Come, First-Served (FCFS)](#first-come-first-served-fcfs)
  - [Shortest Job First (SJF)](#shortest-job-first-sjf)
  - [Priority Scheduling](#priority-scheduling)
  - [Round Robin (RR)](#round-robin-rr)
- [Learnings](#learnings)
- [Further Improvements](#further-improvements)
- [Resources](#resources)

## Installation

To run the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone git@github.com:aryan3939/CPU_SCHEDULER.git
    ```
    Alternatively, you can download the repository as a ZIP file and extract it.

2. **Navigate to the project folder**:
    ```sh
    cd CPU_SCHEDULER
    ```

3. **Compile the C++ code**:
    ```sh
    g++ -o backend/scheduler backend/algorithms/schedular.cpp
    ```
    This command compiles the C++ code and generates an executable file named `scheduler` in the `backend` directory.

4. **Install the necessary Node.js packages**:
    ```sh
    npm install
    ```
    This command installs all the dependencies required for the project.

5. **Start the application**:
    ```sh
    npm start
    ```
    This command starts the Node.js server.

6. **Access the simulator**:
    Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the CPU scheduler simulator.

## Usage

The CPU Scheduler project is used to simulate and visualize different CPU scheduling algorithms. Users can input processes with various burst times, priorities, and arrival times. The simulator will then demonstrate how each scheduling algorithm handles the processes, providing a visual representation of the scheduling order and time slices allocated to each process.

To use the simulator:
1. Start the application by following the [Installation](#installation) steps.
2. Open the simulator in your web browser.
3. Enter the process details (number of processes, quantum time, arrival time, burst time, priority).
4. Run the simulation to see the results and get to know the best algorithm based on average waiting time.

## Algorithms

### First-Come, First-Served (FCFS)
FCFS is the simplest scheduling algorithm. It schedules tasks in the order they arrive. It is non-preemptive, meaning once a process starts its execution, it runs to completion. This can lead to the "convoy effect," where shorter processes wait for longer processes to finish, potentially increasing the average waiting time.

For further reading:
- [GeeksforGeeks: First-Come, First-Served (FCFS) Scheduling](https://www.geeksforgeeks.org/first-come-first-serve-fcfs-scheduling/)

### Shortest Job First (SJF)
SJF schedules tasks based on the shortest burst time. It can be either preemptive or non-preemptive. Preemptive SJF is also known as Shortest Remaining Time First (SRTF). This algorithm aims to minimize the average waiting time, but it requires accurate knowledge of the future burst times of processes, which can be difficult to obtain.

For further reading:
- [GeeksforGeeks: Shortest Job First (SJF) Scheduling](https://www.geeksforgeeks.org/shortest-job-first-sjf-scheduling/)

### Priority Scheduling
In Priority Scheduling, each process is assigned a priority, and the CPU is allocated to the process with the highest priority. It can be either preemptive or non-preemptive. In preemptive priority scheduling, a running process can be interrupted if a new process with a higher priority arrives. One potential drawback is starvation, where lower-priority processes may wait indefinitely if higher-priority processes keep arriving.

For further reading:
- [GeeksforGeeks: Priority Scheduling](https://www.geeksforgeeks.org/priority-scheduling-in-operating-system/)

### Round Robin (RR)
Round Robin scheduling assigns a fixed time slice or quantum to each process in the queue and cycles through them. It is preemptive and designed to provide a fair allocation of CPU time to all processes, making it suitable for time-sharing systems. If a process does not complete within its time slice, it is moved to the back of the queue. This algorithm can be highly effective in reducing response times for interactive systems.

For further reading:
- [GeeksforGeeks: Round Robin Scheduling](https://www.geeksforgeeks.org/round-robin-scheduling-algorithm/)

It is important to note that the effectiveness of each algorithm depends on the specific input and workload characteristics. No single algorithm is the best in all situations.

## Learnings

Throughout this project, several key learnings were achieved:
- **CPU Scheduling**: Gained a deep understanding of various CPU scheduling algorithms, which are fundamental concepts in operating systems.
- **Integration**: Learned how to integrate C++ code and executable files with a modern frontend framework, combining high-performance backend processing with an interactive user interface.
- Additionally, the project underscored the significance of algorithm selection based on the unique requirements and characteristics of the processes involved.

## Further Improvements

1. An intriguing avenue for enhancement involves the exploration and potentially the implementation of the **Modified Round Robin algorithm**. Diverging from the traditional Round Robin, this variant incorporates a mechanism to sort the process queue based on remaining burst times after the completion of the first cycle, potentially leading to further reductions in average waiting times.
2. Make vualizations of each processes and comapre those graphs charts to determine the best algorithms based on the need we have.


This modification aims to reduce the average waiting time by taking advantage of the shorter remaining burst times in subsequent cycles.

## Resources

The following resources were instrumental in the development of this project:
- [YouTube Playlist on CPU Scheduling](https://www.youtube.com/playlist?list=PLBlnK6fEyqRitWSE_AyyySWfhRgyA-rHk): A comprehensive series of videos explaining various CPU scheduling algorithms.
- [Chapter 4 of *Linux Kernel Development* by Robert Love:](https://www.doc-developpement-durable.org/file/Projets-informatiques/cours-&-manuels-informatiques/Linux/Linux%20Kernel%20Development,%203rd%20Edition.pdf) Provided detailed insights and implementation details for CPU scheduling.
- [Novel Scheduling Algorithm](https://www.researchgate.net/publication/49619229_An_Improved_Round_Robin_Schedduling_Algorithm_for_CPU_Scheduling) Article on the modified Round Robin algorithm: Offered guidance on improving the standard Round Robin algorithm to enhance performance and efficiency.
