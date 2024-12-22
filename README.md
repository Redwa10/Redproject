import csv

print(" 1. add a task \n"
        "2. update a task\n"
        "3. delete a task\n"
        "4. list all the tasks\n"
       " 5. list all the tasks that are done\n"
       " 6. list all the the tasks in progress\n")
tasks = []
def list_task():    
    global tasks
    with open("task.csv") as file:
        reader = csv.reader(file)
        next(reader)
        for task, ids, des, status in reader:
            tasks.append({"task": task, "ids": ids, "des": des, "status": status})
    for t in tasks:
        print(f"{t["task"]} {t["ids"]} {t["des"]} {t["status"]}")


response = int(input("enter the number"))

if response == 1:
    tasks = []
    with open("task.csv") as file:
        reader = csv.reader(file)
        next(reader)
        for task, id, des, status in reader:
            tasks.append({"task": task, "ids": id, "des": des, "status": status})

    while True:        
        try:
            ids = input("enter id: ")
            if any(t["ids"] == ids for t in tasks):
                    raise ValueError("invalid id: id already exist")
        except ValueError as e:
            print(e)
        else:
            break
    task = input("add a task: ")      
    des = input("enter the description of the task: ")
    def add_task(status= "to do"):
        with open("task.csv", "a", newline='') as file:
            writer = csv.writer(file)
            writer.writerow([task, ids, des, status])
        print("task added sucessfully")
    add_task()


elif response == 2:
    def update():
        global tasks            
        list_task()
        idss = input("choose the task u  want to update and enter the id: ")
        response1 = int(input("if u want to update the status enter 1 or if u want to update the task enter 2 and if u want to update the description enter 3"))
        updated = False
        if response1 == 1:
            for t in tasks:
                if t["ids"] == idss:
                    stat = input("the status of the task rn")
                    t["status"] = stat
                    print("successfully updated")
                    updated= True
        elif response1 == 2:
            for t in tasks:
                if t["ids"] == idss:
                    taskk = input("the updated the task would be: ")
                    t["task"] = taskk
                    print("updated successfully")
                    updated= True
        elif response1 == 3:
            for t in tasks:
                if t["ids"] == idss:
                    dess = input("enter the new description: ")
                    t["des"] = dess
                    print("updated successfully")
                    updated= True
        if updated:                                                                             # to save the update( it is must)
            with open("task.csv", "w", newline='') as file:
                writer = csv.writer(file)
                writer.writerow(["task", "ids", "des", "status"])
                for t in tasks:
                    writer.writerow([t["task"], t["ids"], t["des"],t["status"]] )
    update()


elif response == 3:
    def delete():
        list_task()
        idss = input("choose the task u  want to delete and enter the id: ")
        tasks_to_keep = [t for t in tasks if t["ids"] != idss]
        deleted = len(task) != len(tasks_to_keep)
        if deleted:
            print("deleted successfully")
            with open("task.csv", "w", newline= '') as file:
                writer= csv.writer(file)
                writer.writerow(["task", "ids", "des", "status"])
                for t in tasks_to_keep:
                    writer.writerow([t["task"], t["ids"], t["des"], t["status"]])
    delete()

elif response == 4:
    list_task()

elif response == 5:
    def list_done():
        tasks= []
        with open("task.csv") as file:
            reader = csv.reader(file)
            next(reader)
            for task, ids, des, status in reader:
                tasks.append({"task": task, "ids": ids, "des": des, "status": status})
        tasks_done =[t for t in tasks if t["status"] == "done"]
        for t in tasks_done:
            print(f"{t["task"]} {t["ids"]} {t["des"]} {t["status"]}")
    list_done()


elif response == 6:
    def list_in_progress():        
        tasks= []
        with open("task.csv") as file:
            reader = csv.reader(file)
            next(reader)
            for task, ids, des, status in reader:
                tasks.append({"task": task, "ids": ids, "des": des, "status": status})
        tasks_in_progress =[t for t in tasks if t["status"] == "in progress"]
        for t in tasks_in_progress:
            print(f"{t["task"]} {t["ids"]} {t["des"]} {t["status"]}")
