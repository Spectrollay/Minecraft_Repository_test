/*
 * Copyright © 2020. Spectrollay
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// 实验性

const exp_css = document.createElement('link');
exp_css.rel = 'stylesheet';
exp_css.href = '/minecraft_repository_test/experiments/index.css';

document.head.appendChild(exp_css);


// 新的实验性页面
let newFlagsPageSwitch = document.getElementById('new_flags_page');
let newFlagsPageState;
let switchValues;

function flagsPage() {
    switchValues = JSON.parse(localStorage.getItem('(/minecraft_repository_test/)switch_value')) || {};
    newFlagsPageState = switchValues['new_flags_page'] || newFlagsPageSwitch.getAttribute('active'); // 默认禁用
    if (newFlagsPageState === 'on') {
        ifNavigating("jump", "/minecraft_repository_test/flags/");
    } else {
        ifNavigating("jump", "/minecraft_repository_test/experiments/");
    }
}


