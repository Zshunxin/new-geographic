# CSS样式设计

## 来自你的消息:
我想用html、css、js设计一个项目api的说明，左侧是导航，右侧是内容，支持以md的格式展示

## 来自 ChatGPT 的消息:
好的，您可以按照以下步骤来完成您的设计：

1. 创建HTML文件并添加必要的CSS和JS文件链接。

2. 在HTML文件中创建一个左侧导航栏和一个右侧内容区域的布局。

3. 使用CSS样式对导航栏和内容区域进行布局和美化。

4. 使用JS编写代码，使得点击导航栏中的链接可以在右侧内容区域中展示相应的内容。

5. 在内容区域中使用Markdown格式来展示API的说明。

下面是一个简单的示例代码：

HTML部分：

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>API说明</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="container">
		<div class="sidebar">
			<ul>
				<li><a href="#api1">API1</a></li>
				<li><a href="#api2">API2</a></li>
				<li><a href="#api3">API3</a></li>
			</ul>
		</div>
		<div class="content">
			<h2 id="api1">API1</h2>
			<div class="markdown">
				<p>这是API1的说明</p>
			</div>
			<h2 id="api2">API2</h2>
			<div class="markdown">
				<p>这是API2的说明</p>
			</div>
			<h2 id="api3">API3</h2>
			<div class="markdown">
				<p>这是API3的说明</p>
			</div>
		</div>
	</div>
	<script src="script.js"></script>
</body>
</html>
```

CSS部分：

```
.container {
	display: flex;
}

.sidebar {
	width: 200px;
	background-color: #f5f5f5;
}

.sidebar ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.sidebar li {
	padding: 10px;
}

.sidebar li a {
	color: #333;
	text-decoration: none;
}

.sidebar li a:hover {
	color: #666;
}

.content {
	flex: 1;
	padding: 20px;
}

.markdown {
	font-family: Arial, sans-serif;
	line-height: 1.5;
}
```

JS部分：

```
var links = document.querySelectorAll('.sidebar li a');
var content = document.querySelectorAll('.content .markdown');

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function(event) {
		event.preventDefault();
		for (var j = 0; j < content.length; j++) {
			content[j].style.display = 'none';
		}
		var target = this.getAttribute('href');
		document.querySelector(target).style.display = 'block';
	});
}
```

您可以根据自己的需求对代码进行修改和扩展，以满足您的具体要求。

## 来自你的消息:
我需要的是右边展示md文件

## 来自 ChatGPT 的消息:
要在网页中展示 Markdown 文件，你可以使用第三方库将 Markdown 转换为 HTML，然后在网页中展示 HTML。比较常用的 Markdown 转 HTML 的库有 marked.js 和 showdown.js。

以下是一个简单的示例代码，使用 marked.js 将 Markdown 文件转换为 HTML 并在网页中展示：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Markdown 文件展示</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <style>
      /* 样式可以根据需要进行修改 */
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      #nav {
        width: 20%;
        height: 100vh;
        float: left;
        background-color: #f5f5f5;
      }
      #content {
        width: 80%;
        height: 100vh;
        float: left;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div id="nav">
      <!-- 左侧导航栏 -->
    </div>
    <div id="content">
      <!-- 右侧展示 Markdown 文件 -->
      <div id="markdown"></div>
    </div>
    <script>
      // 获取 Markdown 文件内容并转换为 HTML
      fetch('example.md')
        .then(response => response.text())
        .then(text => {
          const markdown = document.getElementById('markdown');
          markdown.innerHTML = marked(text);
        });
    </script>
  </body>
</html>
```

在上面的代码中，我们在 head 标签中引入了 marked.js 库，并在 body 标签中创建了一个 div 元素，用于展示 Markdown 文件转换后的 HTML。在 script 标签中，我们使用 fetch 函数获取 Markdown 文件的内容，然后使用 marked 函数将其转换为 HTML，并将 HTML 插入到 div 元素中。

你可以根据需要修改样式和 Markdown 文件的路径，以满足你的具体需求。