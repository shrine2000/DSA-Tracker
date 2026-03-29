(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const I=[{id:1,name:"Contains Duplicate",category:"Arrays & Hashing",difficulty:"Easy"},{id:2,name:"Valid Anagram",category:"Arrays & Hashing",difficulty:"Easy"},{id:3,name:"Two Sum",category:"Arrays & Hashing",difficulty:"Easy"},{id:4,name:"Group Anagrams",category:"Arrays & Hashing",difficulty:"Medium"},{id:5,name:"Top K Frequent Elements",category:"Arrays & Hashing",difficulty:"Medium"},{id:6,name:"Encode and Decode Strings",category:"Arrays & Hashing",difficulty:"Medium"},{id:7,name:"Product of Array Except Self",category:"Arrays & Hashing",difficulty:"Medium"},{id:8,name:"Valid Sudoku",category:"Arrays & Hashing",difficulty:"Medium"},{id:9,name:"Longest Consecutive Sequence",category:"Arrays & Hashing",difficulty:"Medium"},{id:10,name:"Valid Palindrome",category:"Two Pointers",difficulty:"Easy"},{id:11,name:"Two Sum II Input Array Is Sorted",category:"Two Pointers",difficulty:"Medium"},{id:12,name:"3Sum",category:"Two Pointers",difficulty:"Medium"},{id:13,name:"Container With Most Water",category:"Two Pointers",difficulty:"Medium"},{id:14,name:"Trapping Rain Water",category:"Two Pointers",difficulty:"Hard"},{id:15,name:"Best Time to Buy And Sell Stock",category:"Sliding Window",difficulty:"Easy"},{id:16,name:"Longest Substring Without Repeating Characters",category:"Sliding Window",difficulty:"Medium"},{id:17,name:"Longest Repeating Character Replacement",category:"Sliding Window",difficulty:"Medium"},{id:18,name:"Permutation In String",category:"Sliding Window",difficulty:"Medium"},{id:19,name:"Minimum Window Substring",category:"Sliding Window",difficulty:"Hard"},{id:20,name:"Sliding Window Maximum",category:"Sliding Window",difficulty:"Hard"},{id:21,name:"Valid Parentheses",category:"Stack",difficulty:"Easy"},{id:22,name:"Min Stack",category:"Stack",difficulty:"Medium"},{id:23,name:"Evaluate Reverse Polish Notation",category:"Stack",difficulty:"Medium"},{id:24,name:"Daily Temperatures",category:"Stack",difficulty:"Medium"},{id:25,name:"Car Fleet",category:"Stack",difficulty:"Medium"},{id:26,name:"Largest Rectangle In Histogram",category:"Stack",difficulty:"Hard"},{id:27,name:"Binary Search",category:"Binary Search",difficulty:"Easy"},{id:28,name:"Search a 2D Matrix",category:"Binary Search",difficulty:"Medium"},{id:29,name:"Koko Eating Bananas",category:"Binary Search",difficulty:"Medium"},{id:30,name:"Find Minimum In Rotated Sorted Array",category:"Binary Search",difficulty:"Medium"},{id:31,name:"Search In Rotated Sorted Array",category:"Binary Search",difficulty:"Medium"},{id:32,name:"Time Based Key Value Store",category:"Binary Search",difficulty:"Medium"},{id:33,name:"Median of Two Sorted Arrays",category:"Binary Search",difficulty:"Hard"},{id:34,name:"Reverse Linked List",category:"Linked List",difficulty:"Easy"},{id:35,name:"Merge Two Sorted Lists",category:"Linked List",difficulty:"Easy"},{id:36,name:"Linked List Cycle",category:"Linked List",difficulty:"Easy"},{id:37,name:"Reorder List",category:"Linked List",difficulty:"Medium"},{id:38,name:"Remove Nth Node From End of List",category:"Linked List",difficulty:"Medium"},{id:39,name:"Copy List With Random Pointer",category:"Linked List",difficulty:"Medium"},{id:40,name:"Add Two Numbers",category:"Linked List",difficulty:"Medium"},{id:41,name:"Find The Duplicate Number",category:"Linked List",difficulty:"Medium"},{id:42,name:"LRU Cache",category:"Linked List",difficulty:"Medium"},{id:43,name:"Merge K Sorted Lists",category:"Linked List",difficulty:"Hard"},{id:44,name:"Reverse Nodes In K Group",category:"Linked List",difficulty:"Hard"},{id:45,name:"Invert Binary Tree",category:"Trees",difficulty:"Easy"},{id:46,name:"Maximum Depth of Binary Tree",category:"Trees",difficulty:"Easy"},{id:47,name:"Diameter of Binary Tree",category:"Trees",difficulty:"Easy"},{id:48,name:"Balanced Binary Tree",category:"Trees",difficulty:"Easy"},{id:49,name:"Same Tree",category:"Trees",difficulty:"Easy"},{id:50,name:"Subtree of Another Tree",category:"Trees",difficulty:"Easy"},{id:51,name:"Lowest Common Ancestor of a Binary Search Tree",category:"Trees",difficulty:"Medium"},{id:52,name:"Binary Tree Level Order Traversal",category:"Trees",difficulty:"Medium"},{id:53,name:"Binary Tree Right Side View",category:"Trees",difficulty:"Medium"},{id:54,name:"Count Good Nodes In Binary Tree",category:"Trees",difficulty:"Medium"},{id:55,name:"Validate Binary Search Tree",category:"Trees",difficulty:"Medium"},{id:56,name:"Kth Smallest Element In a Bst",category:"Trees",difficulty:"Medium"},{id:57,name:"Construct Binary Tree From Preorder And Inorder Traversal",category:"Trees",difficulty:"Medium"},{id:58,name:"Binary Tree Maximum Path Sum",category:"Trees",difficulty:"Hard"},{id:59,name:"Serialize And Deserialize Binary Tree",category:"Trees",difficulty:"Hard"},{id:60,name:"Kth Largest Element In a Stream",category:"Heap / Priority Queue",difficulty:"Easy"},{id:61,name:"Last Stone Weight",category:"Heap / Priority Queue",difficulty:"Easy"},{id:62,name:"K Closest Points to Origin",category:"Heap / Priority Queue",difficulty:"Medium"},{id:63,name:"Kth Largest Element In An Array",category:"Heap / Priority Queue",difficulty:"Medium"},{id:64,name:"Task Scheduler",category:"Heap / Priority Queue",difficulty:"Medium"},{id:65,name:"Design Twitter",category:"Heap / Priority Queue",difficulty:"Medium"},{id:66,name:"Find Median From Data Stream",category:"Heap / Priority Queue",difficulty:"Hard"},{id:67,name:"Subsets",category:"Backtracking",difficulty:"Medium"},{id:68,name:"Combination Sum",category:"Backtracking",difficulty:"Medium"},{id:69,name:"Combination Sum II",category:"Backtracking",difficulty:"Medium"},{id:70,name:"Permutations",category:"Backtracking",difficulty:"Medium"},{id:71,name:"Subsets II",category:"Backtracking",difficulty:"Medium"},{id:72,name:"Generate Parentheses",category:"Backtracking",difficulty:"Medium"},{id:73,name:"Word Search",category:"Backtracking",difficulty:"Medium"},{id:74,name:"Palindrome Partitioning",category:"Backtracking",difficulty:"Medium"},{id:75,name:"Letter Combinations of a Phone Number",category:"Backtracking",difficulty:"Medium"},{id:76,name:"N Queens",category:"Backtracking",difficulty:"Hard"},{id:77,name:"Implement Trie Prefix Tree",category:"Tries",difficulty:"Medium"},{id:78,name:"Design Add And Search Words Data Structure",category:"Tries",difficulty:"Medium"},{id:79,name:"Word Search II",category:"Tries",difficulty:"Hard"},{id:80,name:"Number of Islands",category:"Graphs",difficulty:"Medium"},{id:81,name:"Max Area of Island",category:"Graphs",difficulty:"Medium"},{id:82,name:"Clone Graph",category:"Graphs",difficulty:"Medium"},{id:83,name:"Walls And Gates",category:"Graphs",difficulty:"Medium"},{id:84,name:"Rotting Oranges",category:"Graphs",difficulty:"Medium"},{id:85,name:"Pacific Atlantic Water Flow",category:"Graphs",difficulty:"Medium"},{id:86,name:"Surrounded Regions",category:"Graphs",difficulty:"Medium"},{id:87,name:"Course Schedule",category:"Graphs",difficulty:"Medium"},{id:88,name:"Course Schedule II",category:"Graphs",difficulty:"Medium"},{id:89,name:"Graph Valid Tree",category:"Graphs",difficulty:"Medium"},{id:90,name:"Number of Connected Components In An Undirected Graph",category:"Graphs",difficulty:"Medium"},{id:91,name:"Redundant Connection",category:"Graphs",difficulty:"Medium"},{id:92,name:"Word Ladder",category:"Graphs",difficulty:"Hard"},{id:93,name:"Network Delay Time",category:"Advanced Graphs",difficulty:"Medium"},{id:94,name:"Reconstruct Itinerary",category:"Advanced Graphs",difficulty:"Hard"},{id:95,name:"Min Cost to Connect All Points",category:"Advanced Graphs",difficulty:"Medium"},{id:96,name:"Swim In Rising Water",category:"Advanced Graphs",difficulty:"Hard"},{id:97,name:"Alien Dictionary",category:"Advanced Graphs",difficulty:"Hard"},{id:98,name:"Cheapest Flights Within K Stops",category:"Advanced Graphs",difficulty:"Medium"},{id:99,name:"Climbing Stairs",category:"1-D Dynamic Programming",difficulty:"Easy"},{id:100,name:"Min Cost Climbing Stairs",category:"1-D Dynamic Programming",difficulty:"Easy"},{id:101,name:"House Robber",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:102,name:"House Robber II",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:103,name:"Longest Palindromic Substring",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:104,name:"Palindromic Substrings",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:105,name:"Decode Ways",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:106,name:"Coin Change",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:107,name:"Maximum Product Subarray",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:108,name:"Word Break",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:109,name:"Longest Increasing Subsequence",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:110,name:"Partition Equal Subset Sum",category:"1-D Dynamic Programming",difficulty:"Medium"},{id:111,name:"Unique Paths",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:112,name:"Longest Common Subsequence",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:113,name:"Best Time to Buy And Sell Stock With Cooldown",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:114,name:"Coin Change II",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:115,name:"Target Sum",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:116,name:"Interleaving String",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:117,name:"Longest Increasing Path In a Matrix",category:"2-D Dynamic Programming",difficulty:"Hard"},{id:118,name:"Distinct Subsequences",category:"2-D Dynamic Programming",difficulty:"Hard"},{id:119,name:"Edit Distance",category:"2-D Dynamic Programming",difficulty:"Medium"},{id:120,name:"Burst Balloons",category:"2-D Dynamic Programming",difficulty:"Hard"},{id:121,name:"Regular Expression Matching",category:"2-D Dynamic Programming",difficulty:"Hard"},{id:122,name:"Maximum Subarray",category:"Greedy",difficulty:"Medium"},{id:123,name:"Jump Game",category:"Greedy",difficulty:"Medium"},{id:124,name:"Jump Game II",category:"Greedy",difficulty:"Medium"},{id:125,name:"Gas Station",category:"Greedy",difficulty:"Medium"},{id:126,name:"Hand of Straights",category:"Greedy",difficulty:"Medium"},{id:127,name:"Merge Triplets to Form Target Triplet",category:"Greedy",difficulty:"Medium"},{id:128,name:"Partition Labels",category:"Greedy",difficulty:"Medium"},{id:129,name:"Valid Parenthesis String",category:"Greedy",difficulty:"Medium"},{id:130,name:"Insert Interval",category:"Intervals",difficulty:"Medium"},{id:131,name:"Merge Intervals",category:"Intervals",difficulty:"Medium"},{id:132,name:"Non Overlapping Intervals",category:"Intervals",difficulty:"Medium"},{id:133,name:"Meeting Rooms",category:"Intervals",difficulty:"Easy"},{id:134,name:"Meeting Rooms II",category:"Intervals",difficulty:"Medium"},{id:135,name:"Minimum Interval to Include Each Query",category:"Intervals",difficulty:"Hard"},{id:136,name:"Rotate Image",category:"Math & Geometry",difficulty:"Medium"},{id:137,name:"Spiral Matrix",category:"Math & Geometry",difficulty:"Medium"},{id:138,name:"Set Matrix Zeroes",category:"Math & Geometry",difficulty:"Medium"},{id:139,name:"Happy Number",category:"Math & Geometry",difficulty:"Easy"},{id:140,name:"Plus One",category:"Math & Geometry",difficulty:"Easy"},{id:141,name:"Pow(x, n)",category:"Math & Geometry",difficulty:"Medium"},{id:142,name:"Multiply Strings",category:"Math & Geometry",difficulty:"Medium"},{id:143,name:"Detect Squares",category:"Math & Geometry",difficulty:"Medium"},{id:144,name:"Single Number",category:"Bit Manipulation",difficulty:"Easy"},{id:145,name:"Number of 1 Bits",category:"Bit Manipulation",difficulty:"Easy"},{id:146,name:"Counting Bits",category:"Bit Manipulation",difficulty:"Easy"},{id:147,name:"Reverse Bits",category:"Bit Manipulation",difficulty:"Easy"},{id:148,name:"Missing Number",category:"Bit Manipulation",difficulty:"Easy"},{id:149,name:"Sum of Two Integers",category:"Bit Manipulation",difficulty:"Medium"},{id:150,name:"Reverse Integer",category:"Bit Manipulation",difficulty:"Medium"}],g=()=>{const e=new Date;return e.setHours(0,0,0,0),e},w=()=>{const e=new Date().getDay();return e===0||e===6},A=(e,t)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r.setHours(0,0,0,0),r},h=[1,3,7,14,30],S=e=>{const t=h[Math.min(e,h.length-1)];return A(g(),t)},b="neetcode-150-tracker",D="dsa-tracker-custom-problems",y=()=>{const e=localStorage.getItem(b);return e?JSON.parse(e):{}},k=e=>{localStorage.setItem(b,JSON.stringify(e))},P=()=>{const e=localStorage.getItem(D);return e?JSON.parse(e):[]},x=(e,t,r,n)=>{const i=P(),o={id:Date.now(),name:e,link:t,category:r,difficulty:n,isCustom:!0};return i.push(o),localStorage.setItem(D,JSON.stringify(i)),o},p="dsa-tracker-streak",H=()=>{const e=localStorage.getItem(p),t=e?JSON.parse(e):{current:0,lastDate:null};if(t.lastDate){const r=new Date(t.lastDate);r.setHours(0,0,0,0);const n=new Date;n.setHours(0,0,0,0),Math.floor((n.getTime()-r.getTime())/(1e3*60*60*24))>1&&(t.current=0,t.lastDate=null,localStorage.setItem(p,JSON.stringify(t)))}return t.current},T=()=>{const e=localStorage.getItem(p),t=e?JSON.parse(e):{current:0,lastDate:null},r=new Date;r.setHours(0,0,0,0);const n=r.toISOString().split("T")[0];if(t.lastDate!==n){if(t.lastDate){const i=new Date(t.lastDate);i.setHours(0,0,0,0),Math.floor((r.getTime()-i.getTime())/(1e3*60*60*24))===1?t.current+=1:t.current=1}else t.current=1;t.lastDate=n,localStorage.setItem(p,JSON.stringify(t))}},L=e=>{const t=y(),r=g().toISOString();return t[e]={id:e,completedDate:r,lastRevisedDate:r,revisionCount:0,nextRevisionDate:S(0).toISOString()},k(t),T(),t[e]},C=e=>{const t=y(),r=t[e];if(!r)return;const n=g().toISOString(),i=r.revisionCount+1;return t[e]={...r,lastRevisedDate:n,revisionCount:i,nextRevisionDate:S(i).toISOString()},k(t),T(),t[e]},R=e=>{const t=y(),r=Object.keys(t).length,n=e.length,i=g(),o=Object.values(t).filter(a=>a.nextRevisionDate?new Date(a.nextRevisionDate)<=i:!1).length;return{solved:r,total:n,dueToday:o}},B=(e,t)=>t>0?`You have ${t} problems to review today. Keep the momentum!`:e>=7?`Phenomenal! You're on a ${e} day streak. Keep it up! 🚀`:e>=3?`Great job! ${e} days in a row. Stay consistent!`:"",G=e=>{const{solved:t,total:r,dueToday:n}=R(e),i=H(),o=B(i,n);return`
    <div class="dashboard-grid">
      <div class="stat-item animate-in">
        <p class="stat-label">Progress</p>
        <p class="stat-value">
          ${t}<span style="font-size: 1.5rem; color: var(--text-dim); margin-left: 0.5rem; letter-spacing: 0;">/ ${r}</span>
        </p>
      </div>

      <div class="stat-item animate-in" style="animation-delay: 0.1s">
        <p class="stat-label">Daily Streak</p>
        <p class="stat-value" style="color: ${i>0?"var(--warning)":"var(--text-dim)"}">
          ${i}${i>0?'<span style="font-size: 2rem; margin-left: 0.5rem;">🔥</span>':""}
        </p>
      </div>

      <div class="stat-item animate-in" style="animation-delay: 0.2s; cursor: pointer; display: flex; align-items: flex-end;" id="random-unsolved">
        <div>
           <p class="stat-label">Quick Review</p>
           <p class="stat-value" style="color: var(--primary); font-size: 2.5rem; text-transform: uppercase;">Shuffle</p>
        </div>
      </div>
    </div>
    
    ${o?`
    <div class="motivation-banner animate-in" style="animation-delay: 0.3s">
        ${o}
    </div>`:""}
  `},$=(e,t)=>{const r=y(),n=g(),i=e.filter(a=>{const d=r[a.id];if(t==="all")return!0;if(t==="due")return!d||!d.nextRevisionDate?!1:new Date(d.nextRevisionDate)<=n;if(t==="solved")return!!d;if(t==="weekend"){if(!d||!w())return!1;const c=new Date;return c.setDate(n.getDate()-(n.getDay()||7)+1),c.setHours(0,0,0,0),new Date(d.completedDate)>=c}return a.category===t}),o=Array.from(new Set(e.map(a=>a.category))).sort();return`
    <div class="problem-container">
      <div class="filters animate-in">
        <button class="filter-btn ${t==="all"?"active":""}" data-filter="all">All</button>
        <button class="filter-btn ${t==="due"?"active":""}" data-filter="due">Due</button>
        <button class="filter-btn ${t==="solved"?"active":""}" data-filter="solved">Solved</button>
        ${o.map(a=>`
          <button class="filter-btn ${t===a?"active":""}" data-filter="${a}">${a}</button>
        `).join("")}
      </div>

      <div class="problem-list">
        ${i.map((a,d)=>{const c=r[a.id],s=!!c,f=c&&c.nextRevisionDate&&new Date(c.nextRevisionDate)<=n,l=a.difficulty==="Easy"?"dot-easy":a.difficulty==="Medium"?"dot-medium":"dot-hard";return`
            <div alt="problem-card" class="problem-item animate-in" style="animation-delay: ${d*.05}s" data-problem-id="${a.id}">
              <div class="problem-info">
                <div class="difficulty-dot ${l}"></div>
                <div>
                  ${a.link?`<a href="${a.link}" target="_blank" class="problem-title" onclick="event.stopPropagation()">${a.name}</a>`:`<h3 class="problem-title">${a.name}</h3>`}
                  <div class="problem-meta">
                    ${a.category} ${f?'• <span style="color: var(--primary); font-weight: 700">Review Now</span>':""}
                  </div>
                </div>
              </div>
              
              <button class="mark-btn ${s?"solved":""}" data-id="${a.id}">
                ${s?"✓":"+"}
              </button>
            </div>
          `}).join("")}
        ${i.length===0?'<div style="text-align: center; padding: 4rem; color: var(--text-dim)">No problems found.</div>':""}
      </div>
    </div>
  `},N=e=>`
        <section class="add-problem-section animate-in">
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Add Custom Problem</h2>
            <div class="form-group">
                <input type="text" id="custom-problem-link" placeholder="LeetCode URL" />
                <select id="custom-problem-topic">
                    <option value="" disabled selected>Select Topic</option>
                    ${e.map(t=>`<option value="${t}">${t}</option>`).join("")}
                    <option value="Other">Other</option>
                </select>
                <select id="custom-problem-difficulty">
                    <option value="Easy">Easy</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <button id="add-custom-problem-btn" class="add-btn">Add Problem</button>
            </div>
        </section>
    `,O=(e,t)=>{const r=[{label:"Day 0",value:0},{label:"+1d",value:1},{label:"+3d",value:2},{label:"+7d",value:3},{label:"+14d",value:4},{label:"+30d",value:5}];return`
    <div id="modal-overlay" class="modal-overlay">
      <div class="modal-content animate-in">
        <button id="close-modal" class="close-modal">✕</button>
        <div class="modal-header">
          <p style="color: var(--primary); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.5rem;">Revision Session</p>
          <h2>${e.name}</h2>
          <p style="color: var(--text-dim); margin-bottom: 2.5rem; font-size: 0.9rem;">${e.category}</p>
        </div>

        <div class="srs-timeline-container">
          <p class="stat-label" style="text-align: center; margin-bottom: 1.5rem;">Next Milestones</p>
          <div class="srs-timeline" style="display: flex; justify-content: space-between; position: relative; padding: 0 10px;">
            ${r.map(n=>{const i=t>n.value,o=t===n.value;return`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; position: relative; z-index: 2;">
                  <div style="width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 2px solid ${i||o?"var(--primary)":"var(--border)"}; background: ${o?"var(--primary)":"var(--card-bg)"}; color: ${o?"var(--bg-color)":i?"var(--primary)":"var(--text-dim)"}; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800;">
                    ${i?"✓":""}
                  </div>
                  <span style="font-size: 0.65rem; color: ${o?"var(--text-main)":"var(--text-dim)"}; font-weight: 600;">${n.label}</span>
                </div>
                `}).join("")}
            <div style="position: absolute; top: 0.75rem; left: 1rem; right: 1rem; height: 1px; background: var(--border); z-index: 1;"></div>
          </div>
        </div>
        
        <div class="recall-tip" style="margin-top: 3rem; background: var(--bg-color); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border);">
          <h4 style="font-size: 0.9rem; margin-bottom: 0.75rem;">Active Recall Guide:</h4>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--text-dim); display: flex; flex-direction: column; gap: 0.4rem;">
            <li>Explain the logic out loud before coding.</li>
            <li>Visualize the data structures involved.</li>
            <li>Double-check edge cases (empty, single element).</li>
          </ul>
        </div>

        <button id="mark-revised" class="primary-btn" style="margin-top: 2rem;">
          Step Completed
        </button>
      </div>
    </div>
  `},q=document.querySelector("#app");let E="all";const v=()=>[...I,...P()],W=()=>{const e=localStorage.getItem("dsa-tracker-theme");e?document.documentElement.setAttribute("data-theme",e):window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.setAttribute("data-theme","dark")},K=()=>{const t=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("dsa-tracker-theme",t)},u=()=>{const e=v(),t=Array.from(new Set(e.map(n=>n.category))).sort(),r=document.documentElement.getAttribute("data-theme")==="dark";q.innerHTML=`
    <header>
      <div class="title-group">
        <h1>DSA Tracker</h1>
        <p>Minimalist Revision System</p>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <button id="open-drawer" class="filter-btn" style="background: var(--text-main); color: var(--bg-color); border: none; font-weight: 700;">Add problem</button>
        <button class="theme-toggle" id="theme-toggle" title="Toggle Theme">
          ${r?"☀️":"🌙"}
        </button>
      </div>
    </header>
    
    <main id="main-content">
      ${G(e)}
      ${$(e,E)}
    </main>

    <div id="drawer-overlay" class="drawer-overlay">
        <div class="drawer-content">
            <button id="close-drawer" class="drawer-close">✕</button>
            <div class="drawer-header">
                <h2>Add Problem</h2>
                <p style="color: var(--text-dim); font-size: 0.85rem; margin-top: 0.25rem;">Expand your collection</p>
            </div>
            ${N(t)}
        </div>
    </div>

    <div id="modal-container"></div>
  `,z()},z=()=>{var t,r,n,i,o;const e=document.querySelector("#drawer-overlay");(t=document.querySelector("#open-drawer"))==null||t.addEventListener("click",()=>{e.classList.add("open")}),(r=document.querySelector("#close-drawer"))==null||r.addEventListener("click",()=>{e.classList.remove("open")}),e==null||e.addEventListener("click",a=>{a.target===e&&e.classList.remove("open")}),(n=document.querySelector("#theme-toggle"))==null||n.addEventListener("click",()=>{K(),u()}),document.querySelectorAll(".filters .filter-btn").forEach(a=>{a.addEventListener("click",d=>{E=d.currentTarget.dataset.filter,u()})}),document.querySelectorAll(".mark-btn").forEach(a=>{a.addEventListener("click",d=>{d.stopPropagation();const c=parseInt(d.currentTarget.dataset.id);L(c),u()})}),(i=document.querySelector("#add-custom-problem-btn"))==null||i.addEventListener("click",()=>{const a=document.querySelector("#custom-problem-link"),d=document.querySelector("#custom-problem-topic"),c=document.querySelector("#custom-problem-difficulty");if(!a.value||!d.value){alert("Please provide both a link and a topic.");return}let s="Custom Problem";try{const l=new URL(a.value).pathname.split("/").filter(m=>!!m);l[0]==="problems"&&l[1]?s=l[1].split("-").map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" "):l[0]&&(s=l[0].split("-").map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" "))}catch{}x(s,a.value,d.value,c.value),u()}),(o=document.querySelector("#random-unsolved"))==null||o.addEventListener("click",()=>{const a=v(),d=y(),c=a.filter(s=>!d[s.id]);if(c.length>0){const s=c[Math.floor(Math.random()*c.length)];M(s)}else alert("Congratulations! You have solved all problems. 🎉")}),document.querySelectorAll("[data-problem-id]").forEach(a=>{a.addEventListener("click",()=>{const d=parseInt(a.dataset.problemId),s=v().find(f=>f.id===d);s&&M(s)})})},M=e=>{var i,o,a,d;const t=y(),r=((i=t[e.id])==null?void 0:i.revisionCount)||0,n=document.querySelector("#modal-container");n.innerHTML=O(e,r),(o=document.querySelector("#close-modal"))==null||o.addEventListener("click",()=>{n.innerHTML=""}),(a=document.querySelector("#mark-revised"))==null||a.addEventListener("click",()=>{t[e.id]?C(e.id):L(e.id),n.innerHTML="",u()}),(d=document.querySelector("#modal-overlay"))==null||d.addEventListener("click",c=>{c.target.id==="modal-overlay"&&(n.innerHTML="")})};W();u();
