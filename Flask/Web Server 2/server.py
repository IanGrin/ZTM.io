from flask import Flask, render_template
app = Flask(__name__)
print(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/favicon.ico')
def favicon():
    return 'this is my dog'