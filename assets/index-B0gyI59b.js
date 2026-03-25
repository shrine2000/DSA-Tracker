(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const n of d.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(r){if(r.ep)return;r.ep=!0;const d=t(r);fetch(r.href,d)}})();const m=[{id:1,name:"Contains Duplicate",category:"Arrays & Hashing",difficulty:"Easy"},{id:2,name:"Valid Anagram",category:"Arrays & Hashing",difficulty:"Easy"},{id:3,name:"Two Sum",category:"Arrays & Hashing",difficulty:"Easy"},{id:4,name:"Group Anagrams",category:"Arrays & Hashing",difficulty:"Medium"},{id:5,name:"Top K Frequent Elements",category:"Arrays & Hashing",difficulty:"Medium"},{id:6,name:"Encode and Decode Strings",category:"Arrays & Hashing",difficulty:"Medium"},{id:7,name:"Product of Array Except Self",category:"Arrays & Hashing",difficulty:"Medium"},{id:8,name:"Valid Sudoku",category:"Arrays & Hashing",difficulty:"Medium"},{id:9,name:"Longest Consecutive Sequence",category:"Arrays & Hashing",difficulty:"Medium"},{id:10,name:"Valid Palindrome",category:"Two Pointers",difficulty:"Easy"},{id:11,name:"Two Sum II Input Array Is Sorted",category:"Two Pointers",difficulty:"Medium"},{id:12,name:"3Sum",category:"Two Pointers",difficulty:"Medium"},{id:13,name:"Container With Most Water",category:"Two Pointers",difficulty:"Medium"},{id:14,name:"Trapping Rain Water",category:"Two Pointers",difficulty:"Hard"},{id:15,name:"Best Time to Buy And Sell Stock",category:"Sliding Window",difficulty:"Easy"},{id:16,name:"Longest Substring Without Repeating Characters",category:"Sliding Window",difficulty:"Medium"},{id:17,name:"Longest Repeating Character Replacement",category:"Sliding Window",difficulty:"Medium"},{id:18,name:"Permutation In String",category:"Sliding Window",difficulty:"Medium"},{id:19,name:"Minimum Window Substring",category:"Sliding Window",difficulty:"Hard"},{id:20,name:"Sliding Window Maximum",category:"Sliding Window",difficulty:"Hard"},{id:21,name:"Valid Parentheses",category:"Stack",difficulty:"Easy"},{id:22,name:"Min Stack",category:"Stack",difficulty:"Medium"},{id:23,name:"Evaluate Reverse Polish Notation",category:"Stack",difficulty:"Medium"},{id:24,name:"Daily Temperatures",category:"Stack",difficulty:"Medium"},{id:25,name:"Car Fleet",category:"Stack",difficulty:"Medium"},{id:26,name:"Largest Rectangle In Histogram",category:"Stack",difficulty:"Hard"},{id:27,name:"Binary Search",category:"Binary Search",difficulty:"Easy"},{id:28,name:"Search a 2D Matrix",category:"Binary Search",difficulty:"Medium"},{id:29,name:"Koko Eating Bananas",category:"Binary Search",difficulty:"Medium"},{id:30,name:"Find Minimum In Rotated Sorted Array",category:"Binary Search",difficulty:"Medium"},{id:31,name:"Search In Rotated Sorted Array",category:"Binary Search",difficulty:"Medium"},{id:32,name:"Time Based Key Value Store",category:"Binary Search",difficulty:"Medium"},{id:33,name:"Median of Two Sorted Arrays",category:"Binary Search",difficulty:"Hard"},{id:34,name:"Reverse Linked List",category:"Linked List",difficulty:"Easy"},{id:35,name:"Merge Two Sorted Lists",category:"Linked List",difficulty:"Easy"},{id:36,name:"Linked List Cycle",category:"Linked List",difficulty:"Easy"},{id:37,name:"Reorder List",category:"Linked List",difficulty:"Medium"},{id:38,name:"Remove Nth Node From End of List",category:"Linked List",difficulty:"Medium"},{id:39,name:"Copy List With Random Pointer",category:"Linked List",difficulty:"Medium"},{id:40,name:"Add Two Numbers",category:"Linked List",difficulty:"Medium"},{id:41,name:"Find The Duplicate Number",category:"Linked List",difficulty:"Medium"},{id:42,name:"LRU Cache",category:"Linked List",difficulty:"Medium"},{id:43,name:"Merge K Sorted Lists",category:"Linked List",difficulty:"Hard"},{id:44,name:"Reverse Nodes In K Group",category:"Linked List",difficulty:"Hard"},{id:45,name:"Invert Binary Tree",category:"Trees",difficulty:"Easy"},{id:46,name:"Maximum Depth of Binary Tree",category:"Trees",difficulty:"Easy"},{id:47,name:"Diameter of Binary Tree",category:"Trees",difficulty:"Easy"},{id:48,name:"Balanced Binary Tree",category:"Trees",difficulty:"Easy"},{id:49,name:"Same Tree",category:"Trees",difficulty:"Easy"},{id:50,name:"Subtree of Another Tree",category:"Trees",difficulty:"Easy"},{id:51,name:"Lowest Common Ancestor of a Binary Search Tree",category:"Trees",difficulty:"Medium"},{id:52,name:"Binary Tree Level Order Traversal",category:"Trees",difficulty:"Medium"},{id:53,name:"Binary Tree Right Side View",category:"Trees",difficulty:"Medium"},{id:54,name:"Count Good Nodes In Binary Tree",category:"Trees",difficulty:"Medium"},{id:55,name:"Validate Binary Search Tree",category:"Trees",difficulty:"Medium"},{id:56,name:"Kth Smallest Element In a Bst",category:"Trees",difficulty:"Medium"},{id:57,name:"Construct Binary Tree From Preorder And Inorder Traversal",category:"Trees",difficulty:"Medium"},{id:58,name:"Binary Tree Maximum Path Sum",category:"Trees",difficulty:"Hard"},{id:59,name:"Serialize And Deserialize Binary Tree",category:"Trees",difficulty:"Hard"},{id:60,name:"Kth Largest Element In a Stream",category:"Heap / Priority Queue",difficulty:"Easy"},{id:61,name:"Last Stone Weight",category:"Heap / Priority Queue",difficulty:"Easy"},{id:62,name:"K Closest Points to Origin",category:"Heap / Priority Queue",difficulty:"Medium"},{id:63,name:"Kth Largest Element In An Array",category:"Heap / Priority Queue",difficulty:"Medium"},{id:64,name:"Task Scheduler",category:"Heap / Priority Queue",difficulty:"Medium"},{id:65,name:"Design Twitter",category:"Heap / Priority Queue",difficulty:"Medium"},{id:66,name:"Find Median From Data Stream",category:"Heap / Priority Queue",difficulty:"Hard"},{id:67,name:"Subsets",category:"Backtracking",difficulty:"Medium"},{id:68,name:"Combination Sum",category:"Backtracking",difficulty:"Medium"},{id:69,name:"Combination Sum II",category:"Backtracking",difficulty:"Medium"},{id:70,name:"Permutations",category:"Backtracking",difficulty:"Medium"},{id:71,name:"Subsets II",category:"Backtracking",difficulty:"Medium"},{id:72,name:"Generate Parentheses",category:"Backtracking",difficulty:"Medium"},{id:73,name:"Word Search",category:"Backtracking",difficulty:"Medium"},{id:74,name:"Palindrome Partitioning",category:"Backtracking",difficulty:"Medium"},{id:75,name:"Letter Combinations of a Phone Number",category:"Backtracking",difficulty:"Medium"},{id:76,name:"N Queens",category:"Backtracking",difficulty:"Hard"},{id:77,name:"Implement Trie Prefix Tree",category:"Tries",difficulty:"Medium"},{id:78,name:"Design Add And Search Words Data Structure",category:"Tries",difficulty:"Medium"},{id:79,name:"Word Search II",category:"Tries",difficulty:"Hard"},{id:80,name:"Number of Islands",category:"Graphs",difficulty:"Medium"},{id:81,name:"Max Area of Island",category:"Graphs",difficulty:"Medium"},{id:82,name:"Clone Graph",category:"Graphs",difficulty:"Medium"},{id:83,name:"Walls And Gates",category:"Graphs",difficulty:"Medium"},{id:84,name:"Rotting Oranges",category:"Graphs",difficulty:"Medium"},{id:85,name:"Pacific Atlantic Water Flow",category:"Graphs",difficulty:"Medium"},{id:86,name:"Surrounded Regions",category:"Graphs",difficulty:"Medium"},{id:87,name:"Course Schedule",category:"Graphs",difficulty:"Medium"},{id:88,name:"Course Schedule II",category:"Graphs",difficulty:"Medium"},{id:89,name:"Graph Valid Tree",category:"Graphs",difficulty:"Medium"},{id:90,name:"Number of Connected Components In An Undirected Graph",category:"Graphs",difficulty:"Medium"},{id:91,name:"Redundant Connection",category:"Graphs",difficulty:"Medium"},{id:92,name:"Word Ladder",category:"Graphs",difficulty:"Hard"},{id:93,name:"Network Delay Time",category:"Advanced Graphs",difficulty:"Medium"},{id:94,name:"Reconstruct Itinerary",category:"Advanced Graphs",difficulty:"Hard"},{id:95,name:"Min Cost to Connect All Points",category:"Advanced Graphs",difficulty:"Medium"},{id:96,name:"Swim In Rising Water",category:"Advanced Graphs",difficulty:"Hard"},{id:97,name:"Alien Dictionary",category:"Advanced Graphs",difficulty:"Hard"},{id:98,name:"Cheapest Flights Within K Stops",category:"Advanced Graphs",difficulty:"Medium"},{id:99,name:"Climbing Stairs",category:"1-D Dynamic Programming",difficulty:"Easy"},{id:100,name:"Min Cost Climbing Stairs",category:"1-D Dynamic Programming",difficulty:"Easy"},{id:101,name:"House Robber",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:102,name:"House Robber II",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:103,name:"Longest Palindromic Substring",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:104,name:"Palindromic Substrings",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:105,name:"Decode Ways",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:106,name:"Coin Change",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:107,name:"Maximum Product Subarray",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:108,name:"Word Break",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:109,name:"Longest Increasing Subsequence",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:110,name:"Partition Equal Subset Sum",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:111,name:"Unique Paths",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:112,name:"Longest Common Subsequence",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:113,name:"Best Time to Buy And Sell Stock With Cooldown",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:114,name:"Coin Change II",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:115,name:"Target Sum",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:116,name:"Interleaving String",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:117,name:"Longest Increasing Path In a Matrix",category:"2-D Dynamic Programming",difficulty:"Hard"},{id:118,name:"Distinct Subsequences",category:"2-D Dynamic Programming",difficulty:"Hard"},{id:119,name:"Edit Distance",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:120,name:"Burst Balloons",category:"2-D Dynamic Programming",difficulty:"Hard"},{id:121,name:"Regular Expression Matching",category:"2-D Dynamic Programming",difficulty:"Hard"},{id:122,name:"Maximum Subarray",category:"Greedy",difficulty:"Medium"},{id:123,name:"Jump Game",category:"Greedy",difficulty:"Medium"},{id:124,name:"Jump Game II",category:"Greedy",difficulty:"Medium"},{id:125,name:"Gas Station",category:"Greedy",difficulty:"Medium"},{id:126,name:"Hand of Straights",category:"Greedy",difficulty:"Medium"},{id:127,name:"Merge Triplets to Form Target Triplet",category:"Greedy",difficulty:"Medium"},{id:128,name:"Partition Labels",category:"Greedy",difficulty:"Medium"},{id:129,name:"Valid Parenthesis String",category:"Greedy",difficulty:"Medium"},{id:130,name:"Insert Interval",category:"Intervals",difficulty:"Medium"},{id:131,name:"Merge Intervals",category:"Intervals",difficulty:"Medium"},{id:132,name:"Non Overlapping Intervals",category:"Intervals",difficulty:"Medium"},{id:133,name:"Meeting Rooms",category:"Intervals",difficulty:"Easy"},{id:134,name:"Meeting Rooms II",category:"Intervals",difficulty:"Medium"},{id:135,name:"Minimum Interval to Include Each Query",category:"Intervals",difficulty:"Hard"},{id:136,name:"Rotate Image",category:"Math & Geometry",difficulty:"Medium"},{id:137,name:"Spiral Matrix",category:"Math & Geometry",difficulty:"Medium"},{id:138,name:"Set Matrix Zeroes",category:"Math & Geometry",difficulty:"Medium"},{id:139,name:"Happy Number",category:"Math & Geometry",difficulty:"Easy"},{id:140,name:"Plus One",category:"Math & Geometry",difficulty:"Easy"},{id:141,name:"Pow(x, n)",category:"Math & Geometry",difficulty:"Medium"},{id:142,name:"Multiply Strings",category:"Math & Geometry",difficulty:"Medium"},{id:143,name:"Detect Squares",category:"Math & Geometry",difficulty:"Medium"},{id:144,name:"Single Number",category:"Bit Manipulation",difficulty:"Easy"},{id:145,name:"Number of 1 Bits",category:"Bit Manipulation",difficulty:"Easy"},{id:146,name:"Counting Bits",category:"Bit Manipulation",difficulty:"Easy"},{id:147,name:"Reverse Bits",category:"Bit Manipulation",difficulty:"Easy"},{id:148,name:"Missing Number",category:"Bit Manipulation",difficulty:"Easy"},{id:149,name:"Sum of Two Integers",category:"Bit Manipulation",difficulty:"Medium"},{id:150,name:"Reverse Integer",category:"Bit Manipulation",difficulty:"Medium"}],l=()=>{const i=new Date;return i.setHours(0,0,0,0),i},g=()=>{const i=new Date().getDay();return i===0||i===6},k=(i,e)=>{const t=new Date(i);return t.setDate(t.getDate()+e),t.setHours(0,0,0,0),t},y=[1,3,7,14,30],v=i=>{const e=y[Math.min(i,y.length-1)];return k(l(),e)},p="neetcode-150-tracker",s=()=>{const i=localStorage.getItem(p);return i?JSON.parse(i):{}},h=i=>{localStorage.setItem(p,JSON.stringify(i))},M=i=>{const e=s(),t=l().toISOString();return e[i]={id:i,completedDate:t,lastRevisedDate:t,revisionCount:0,nextRevisionDate:v(0).toISOString()},h(e),e[i]},T=i=>{const e=s(),t=e[i];if(!t)return;const a=l().toISOString(),r=t.revisionCount+1;return e[i]={...t,lastRevisedDate:a,revisionCount:r,nextRevisionDate:v(r).toISOString()},h(e),e[i]},P=i=>{const e=s(),t=Object.values(e).filter(d=>d.completedDate).length,a=l(),r=Object.values(e).filter(d=>d.nextRevisionDate?new Date(d.nextRevisionDate)<=a:!1).length;return{solved:t,total:i,dueToday:r}},L=i=>{const{solved:e,dueToday:t}=P(i),a=g();return`
    <div class="dashboard-grid">
      <div class="glass-card stat-item">
        <div class="stat-icon primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div>
          <p class="stat-label">Total Solved</p>
          <p class="stat-value">${e} <span style="font-size: 1rem; color: var(--text-dim)">/ ${i}</span></p>
        </div>
      </div>

      <div class="glass-card stat-item">
        <div class="stat-icon success" style="${t===0?"opacity: 0.3":""}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>
        </div>
        <div>
          <p class="stat-label">Due Today</p>
          <p class="stat-value" style="color: ${t>0?"var(--success)":"var(--text-dim)"}">${t}</p>
        </div>
      </div>

      <div class="glass-card stat-item">
        <div class="stat-icon warning" style="${a?"":"opacity: 0.3"}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
        <div>
          <p class="stat-label">Weekend Review</p>
          <p class="stat-value" style="color: ${a?"var(--warning)":"var(--text-dim)"}">${a?"Active":"Locked"}</p>
        </div>
      </div>
      <div class="glass-card stat-item" id="random-unsolved" style="cursor: pointer; border-color: var(--primary); background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%);">
        <div class="stat-icon primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>
        </div>
        <div>
          <p class="stat-label">Quick Start</p>
          <p class="stat-value" style="color: var(--primary)">Shuffle</p>
        </div>
      </div>
    </div>
  `},w=(i,e)=>{const t=s(),a=l(),r=i.filter(n=>{const o=t[n.id];if(e==="all")return!0;if(e==="due")return!o||!o.nextRevisionDate?!1:new Date(o.nextRevisionDate)<=a;if(e==="solved")return!!o;if(e==="weekend"){if(!o||!g())return!1;const c=new Date;return c.setDate(a.getDate()-(a.getDay()||7)+1),c.setHours(0,0,0,0),new Date(o.completedDate)>=c}return n.category===e}),d=Array.from(new Set(i.map(n=>n.category)));return`
    <div class="problem-container">
      <div class="filters">
        <button class="filter-btn ${e==="all"?"active":""}" data-filter="all">All</button>
        <button class="filter-btn ${e==="due"?"active":""}" data-filter="due">Due Today</button>
        <button class="filter-btn ${e==="solved"?"active":""}" data-filter="solved">Solved</button>
        <button class="filter-btn ${e==="weekend"?"active":""}" data-filter="weekend">Weekend Special</button>
        ${d.map(n=>`
          <button class="filter-btn ${e===n?"active":""}" data-filter="${n}">${n}</button>
        `).join("")}
      </div>

      <div class="problem-list">
        ${r.map(n=>{const o=t[n.id],c=!!o,D=o&&o.nextRevisionDate&&new Date(o.nextRevisionDate)<=a,b=n.difficulty==="Easy"?"diff-easy":n.difficulty==="Medium"?"diff-medium":"diff-hard";return`
            <div class="glass-card problem-item animate-in" data-problem-id="${n.id}">
              <div class="problem-info">
                <div class="difficulty-tag ${b}">${n.difficulty[0]}</div>
                <div>
                  <h3 class="problem-title">${n.name}</h3>
                  <div class="problem-meta">
                    ${n.category}
                    ${D?'<span class="tag-mini">Review Now</span>':""}
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 1.5rem;">
                ${c?`
                  <div style="text-align: right">
                    <p class="stat-label">Next Rev</p>
                    <p style="font-size: 0.8rem; font-family: monospace;">${new Date(o.nextRevisionDate).toLocaleDateString()}</p>
                  </div>
                `:""}
                <button class="mark-btn ${c?"solved":""}" data-id="${n.id}">
                  ${c?"✓":"+"}
                </button>
              </div>
            </div>
          `}).join("")}
        ${r.length===0?'<div style="text-align: center; padding: 4rem; color: var(--text-dim)">No problems found.</div>':""}
      </div>
    </div>
  `},I=(i,e)=>{const t=[{label:"Day 0",value:0},{label:"+1d",value:1},{label:"+3d",value:2},{label:"+7d",value:3},{label:"+14d",value:4},{label:"+30d",value:5}];return`
    <div id="modal-overlay" class="modal-overlay">
      <div class="glass-card modal-content animate-in">
        <button id="close-modal" class="close-modal">✕</button>
        <div class="modal-header">
          <span>Active Recall Mode</span>
          <h2>${i.name}</h2>
          <p style="color: var(--text-dim); margin-bottom: 2rem;">${i.category}</p>
        </div>

        <div class="srs-timeline-container">
          <p class="stat-label" style="text-align: center; margin-bottom: 1rem;">Revision Schedule</p>
          <div class="srs-timeline">
            ${t.map(a=>{const r=e>a.value,d=e===a.value;return`
                <div class="srs-step ${r?"completed":""} ${d?"current":""}">
                  ${r?"✓":a.value}
                  <div class="srs-label">${a.label}</div>
                </div>
              `}).join("")}
          </div>
        </div>
        
        <div class="recall-tip" style="margin-top: 3rem;">
          <h4>Scientifically Proven Revision Tips:</h4>
          <ul>
            <li>Don't look at the solution immediately.</li>
            <li>Try to write down the approach first.</li>
            <li>Recall time & space complexity.</li>
          </ul>
        </div>

        <button id="mark-revised" class="primary-btn">
          I've Revised This
        </button>
      </div>
    </div>
  `},E=document.querySelector("#app");let S="all";const u=()=>{E.innerHTML=`
    <header>
      <div class="title-group">
        <h1>NeetCode 150 <span>Tracker</span></h1>
        <p>Scientific Revision & Spaced Repetition</p>
      </div>
      <div id="dashboard-container" style="flex: 1; min-width: 300px;">
        ${L(m.length)}
      </div>
    </header>
    
    <main id="main-content">
      ${w(m,S)}
    </main>
    <div id="modal-container"></div>
  `,B()},B=()=>{var i;document.querySelectorAll(".filter-btn").forEach(e=>{e.addEventListener("click",t=>{S=t.currentTarget.dataset.filter,u()})}),document.querySelectorAll(".mark-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const a=parseInt(t.currentTarget.dataset.id);M(a),u()})}),(i=document.querySelector("#random-unsolved"))==null||i.addEventListener("click",()=>{const e=s(),t=m.filter(a=>!e[a.id]);if(t.length>0){const a=t[Math.floor(Math.random()*t.length)];f(a)}else alert("Congratulations! You have solved all problems in this list. 🎉")}),document.querySelectorAll("[data-problem-id]").forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.dataset.problemId),a=m.find(r=>r.id===t);a&&f(a)})})},f=i=>{var r,d,n,o;const e=s(),t=((r=e[i.id])==null?void 0:r.revisionCount)||0,a=document.querySelector("#modal-container");a.innerHTML=I(i,t),(d=document.querySelector("#close-modal"))==null||d.addEventListener("click",()=>{a.innerHTML=""}),(n=document.querySelector("#mark-revised"))==null||n.addEventListener("click",()=>{e[i.id]?T(i.id):M(i.id),a.innerHTML="",u()}),(o=document.querySelector("#modal-overlay"))==null||o.addEventListener("click",c=>{c.target.id==="modal-overlay"&&(a.innerHTML="")})};u();
