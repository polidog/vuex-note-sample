<template>
    <div id="notes-list">
        <header>
            <h2>Notes</h2>
            <div class="btn-group btn-group-justified">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default">All Notes</button>
                </div>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default">Favorites</button>
                </div>
            </div>
        </header>
        <section class="container">
            <div class="list-group">

            </div>
        </section>
    </div>
</template>

<style>
    #notes-list {
        float: left;
        width: 300px;
        height: 100%;
        background-color: #F5F5F5;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }

    #notes-list header {
        padding: 5px 25px 25px 25px;
    }

    #list-header h2 {
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;
        font-size: 22px;
        padding-bottom: 8px;
    }

    #notes-list .container {
        height: calc(100% - 137px);
        max-height: calc(100% - 137px);
        overflow: auto;
        width: 100%;
        padding: 0;
    }

    #notes-list .container .list-group-item {
        border: 0;
        border-radius: 0;
    }
</style>
