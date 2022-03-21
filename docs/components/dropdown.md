# Dropdown
Display hidden content on hover.

## Basic
<div class="drp">
    <span class="drp-btn">Links</span>
    <div class="drp-cnt">
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
    </div>
</div>

```html
<div class="drp">
    <span class="drp-btn">Links</span>
    <div class="drp-cnt">
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
    </div>
</div>
```

## Descriptions
<div class="drp">
    <span class="drp-btn">Descriptions</span>
    <div class="drp-cnt">
        <a>Products<p>Handmade, carefully crafted products</p></a>
        <a>Resources<p>An archive of learning resources</p></a>
        <a>Tutorials<p>Description tutorials to learn CSS</p></a>
    </div>
</div>

```html
<div class="drp">
    <span class="drp-btn">Descriptions</span>
    <div class="drp-cnt">
        <a>Products<p>Handmade, carefully crafted products</p></a>
        <a>Resources<p>An archive of learning resources</p></a>
        <a>Tutorials<p>Description tutorials to learn CSS</p></a>
    </div>
</div>
```

## Categories
<div class="drp">
    <span class="drp-btn">Categories</span>
    <div class="drp-cnt txtl">
        <div class="row pad2 br">
            <div class="col mrg">
                <h4 class="drp-title">Sports</h4>
                <a>Frisbee</a>
                <a>Football</a>
                <a>Soccer</a>
                <a>Baseball</a>
            </div>
            <div class="col mrg">
                <h4 class="drp-title">Calendar</h4>
                <a>2020</a>
                <a>2021</a>
                <a>2022</a>
            </div>
            <div class="col mrg">
                <h4 class="drp-title">Schedule</h4>
                <a>Fall</a>
                <a>Winter</a>
                <a>Spring</a>
                <a>Summer</a>
            </div>
        </div>
    </div>
</div>

```html
<div class="drp">
    <span class="drp-btn">Categories</span>
    <div class="drp-cnt txtl">
        <div class="row pad2 br">
            <div class="col mrg">
                <h4 class="drp-title">Sports</h4>
                <a>Frisbee</a>
                <a>Football</a>
                <a>Soccer</a>
                <a>Baseball</a>
            </div>
            <div class="col mrg">
                <h4 class="drp-title">Calendar</h4>
                <a>2020</a>
                <a>2021</a>
                <a>2022</a>
            </div>
            <div class="col mrg">
                <h4 class="drp-title">Schedule</h4>
                <a>Fall</a>
                <a>Winter</a>
                <a>Spring</a>
                <a>Summer</a>
            </div>
        </div>
    </div>
</div>
```

## Navbar Integration
<nav class="nav-row row jst-between aln-center box">
    <div class="row aln-center">
        <div class="nav-title">Roobie</div>
        <div class="drp">
            <span class="drp-btn nav-item">Links</span>
            <div class="drp-cnt txtc">
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
            </div>
        </div>
        <div class="drp">
            <span class="drp-btn nav-item">Content</span>
            <div class="drp-cnt pad3 br">
                <p>Container that can hold any element</p>
            </div>
        </div>
        <div class="drp">
            <span class="drp-btn nav-item">Descriptions</span>
            <div class="drp-cnt">
                <a>Products<p>Handmade, carefully crafted products</p></a>
                <a>Resources<p>An archive of learning resources</p></a>
                <a>Tutorials<p>Description tutorials to learn CSS</p></a>
            </div>
        </div>
        <div class="drp">
            <span class="drp-btn nav-item">Categories</span>
            <div class="drp-cnt txtl">
                <div class="row pad2 br">
                    <div class="col mrg">
                        <h4 class="drp-title">Sports</h4>
                        <a>Frisbee</a>
                        <a>Football</a>
                        <a>Soccer</a>
                        <a>Baseball</a>
                    </div>
                    <div class="col mrg">
                        <h4 class="drp-title">Calendar</h4>
                        <a>2020</a>
                        <a>2021</a>
                        <a>2022</a>
                    </div>
                    <div class="col mrg">
                        <h4 class="drp-title">Schedule</h4>
                        <a>Fall</a>
                        <a>Winter</a>
                        <a>Spring</a>
                        <a>Summer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

```html
<nav class="nav-row row jst-between aln-center box">
    <div class="row aln-center">
        <div class="nav-title"><span>Roo</span>bie</div>
        <div class="drp">
            <span class="drp-btn nav-item">Links</span>
            <div class="drp-cnt txtc">
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
            </div>
        </div>
        <div class="drp">
            <span class="drp-btn nav-item">Content</span>
            <div class="drp-cnt pad3 br">
                <p>Container that can hold any element</p>
            </div>
        </div>
        <div class="drp">
            <span class="drp-btn nav-item">Descriptions</span>
            <div class="drp-cnt">
                <a>Products<p>Handmade, carefully crafted products</p></a>
                <a>Resources<p>An archive of learning resources</p></a>
                <a>Tutorials<p>Description tutorials to learn CSS</p></a>
            </div>
        </div>
        <div class="drp">
            <span class="drp-btn nav-item">Categories</span>
            <div class="drp-cnt txtl">
                <div class="row pad2 br">
                    <div class="col mrg">
                        <h4 class="drp-title">Sports</h4>
                        <a>Frisbee</a>
                        <a>Football</a>
                        <a>Soccer</a>
                        <a>Baseball</a>
                    </div>
                    <div class="col mrg">
                        <h4 class="drp-title">Calendar</h4>
                        <a>2020</a>
                        <a>2021</a>
                        <a>2022</a>
                    </div>
                    <div class="col mrg">
                        <h4 class="drp-title">Schedule</h4>
                        <a>Fall</a>
                        <a>Winter</a>
                        <a>Spring</a>
                        <a>Summer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
```